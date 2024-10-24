export class Trigger {
  private condition: Record<string, boolean> = {};
  private list: ((immediate: boolean) => boolean)[] = [];
  private validator: (module: string) => boolean = () => true;

  constructor(validator?: (module: string) => boolean) {
    if (validator) {
      this.validator = validator;
    }
  }

  /**
   * 模块条件追加，追加的模块在内部通过校验后会作为触发器的条件模块
   * @param module 模块类型
   * @returns this
   */
  add(module: string): this {
    if (this.validator(module)) {
      this.condition[module] = false;
    }

    return this;
  }

  /**
   * 将一个模块标记为已完成，如果所有的模块都完成会自动触发内部的缓存方法执行。
   * @param module 模块类型
   * @returns this
   */
  reach(module: string): this {
    if (this.condition[module] === undefined) {
      return this;
    }

    this.condition[module] = true;

    if (this.check()) {
      this.trig();
    }
    return this;
  }

  /**
   * 注册一个触发器触发时需要执行的方法
   * @param fun immediate是一个立即执行的标识
   * 这个方法在加入触发器之前会立即执行一次，如果返回为true，就不会加入触发器
   * 如果返回为false就会加入触发器
   * 函数内部可以通过immediate判断是否需要使用该功能
   */
  register(fun: (immediate: boolean) => boolean) {
    if (!fun(true)) {
      this.list.push(fun);
    }
  }

  /**
   * 触发器的执行方法，执行完之后会自动调用重置方法，不建议手动执行。
   */
  trig() {
    const list = this.list;
    for (const fun of list) {
      fun(false);
    }
    this.reset();
  }

  /**
   * 触发器的重置方法，会重置条件与缓存方法列表。
   */
  reset(): void {
    this.list = [];
    Object.keys(this.condition).forEach((key) => {
      this.condition[key] = false;
    });
  }

  /**
   * 触发器的检测方法，检测所有的条件是否达成。
   * @returns boolean
   */
  check() {
    return !Object.values(this.condition).includes(false);
  }
}

/**
 * @deprecated use ObjectTrigger
 */
export const globalObjectModuleTrigger = new Trigger();
