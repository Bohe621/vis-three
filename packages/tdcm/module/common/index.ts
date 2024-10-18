import { globalOption } from "../../option";

export interface BasicConfig {
  vid: string;
  type: string;
  name: string;
  alias: string;
  meta: Record<string, any>;
}

/**
 * @deprecated
 * use BasicConfig
 */
export interface SymbolConfig extends BasicConfig {}

export interface Vector3Config {
  x: number;
  y: number;
  z: number;
}

export interface Vector2Config {
  x: number;
  y: number;
}

/**
 * 获取基础配置单结构
 * @returns
 */
export const getBasicConfig = function (): BasicConfig {
  return {
    vid: "",
    type: "",
    name: "",
    alias: "",
    meta: {},
  };
};

/**
 * @deprecated
 * use getBasicConfig
 */
export const getSymbolConfig = getBasicConfig;

/**
 * 默认唯一标记，通过类型生成，这个标记是固定的
 * 比如对于全局只有唯一的配置类型可以使用此方法
 * @param type 配置的类型
 * @returns
 * @example
 * const gl = uniqueSymbol('WebGLRenderer')
 */
export const uniqueSymbol = function (type: string) {
  return `DEFUALT-${type}`;
};

/**
 * 生成标记，内部使用defineOption定义的方法
 * @returns 标记
 */
export const createSymbol = function () {
  return globalOption.symbol.generator();
};

export const emptyHandler = function () {};
