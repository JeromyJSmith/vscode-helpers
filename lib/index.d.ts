import * as vscode from 'vscode';
export * from './logging';
export * from './workflows';
/**
 * A progress context.
 */
export interface ProgressContext {
    /**
     * Gets or sets the status message.
     */
    message: string;
}
/**
 * Progress options.
 */
export interface ProgressOptions {
    /**
     * The location.
     */
    readonly location?: vscode.ProgressLocation;
    /**
     * The title.
     */
    readonly title?: string;
}
/**
 * A progress result.
 */
export declare type ProgressResult<TResult = any> = TResult | PromiseLike<TResult>;
/**
 * A progress task.
 *
 * @param {ProgressContext} context The underlying context.
 *
 * @return {ProgressResult<TResult>} The result.
 */
export declare type ProgressTask<TResult = any> = (context: ProgressContext) => ProgressResult<TResult>;
/**
 * Describes a simple 'completed' action.
 *
 * @param {any} err The occurred error.
 * @param {TResult} [result] The result.
 */
export declare type SimpleCompletedAction<TResult> = (err: any, result?: TResult) => void;
/**
 * Normalizes a string.
 *
 * @param {TStr} str The value to normalize.
 *
 * @return {string} The normalized string.
 */
export declare type StringNormalizer<TStr = string> = (str: TStr) => string;
/**
 * Applies a function for a specific object / value.
 *
 * @param {TFunc} func The function.
 * @param {any} [thisArgs] The object to apply to the function.
 *
 * @return {TFunc} The wrapped function.
 */
export declare function applyFuncFor<TFunc extends Function = Function>(func: TFunc, thisArgs: any): TFunc;
/**
 * Returns a value as array.
 *
 * @param {T|T[]} val The value.
 * @param {boolean} [removeEmpty] Remove items that are (null) / (undefined) or not.
 *
 * @return {T[]} The value as array.
 */
export declare function asArray<T>(val: T | T[], removeEmpty?: boolean): T[];
/**
 * Clones an object / value deep.
 *
 * @param {T} val The value / object to clone.
 *
 * @return {T} The cloned value / object.
 */
export declare function cloneObject<T>(val: T): T;
/**
 * Compares two values for a sort operation.
 *
 * @param {T} x The left value.
 * @param {T} y The right value.
 *
 * @return {number} The "sort value".
 */
export declare function compareValues<T>(x: T, y: T): number;
/**
 * Compares values by using a selector.
 *
 * @param {T} x The left value.
 * @param {T} y The right value.
 * @param {Function} selector The selector.
 *
 * @return {number} The "sort value".
 */
export declare function compareValuesBy<T, U>(x: T, y: T, selector: (t: T) => U): number;
/**
 * Creates a simple 'completed' callback for a promise.
 *
 * @param {Function} resolve The 'succeeded' callback.
 * @param {Function} reject The 'error' callback.
 *
 * @return {SimpleCompletedAction<TResult>} The created action.
 */
export declare function createCompletedAction<TResult = any>(resolve: (value?: TResult | PromiseLike<TResult>) => void, reject?: (reason: any) => void): SimpleCompletedAction<TResult>;
/**
 * Normalizes a value as string so that is comparable.
 *
 * @param {any} val The value to convert.
 * @param {StringNormalizer} [normalizer] The custom normalizer.
 *
 * @return {string} The normalized value.
 */
export declare function normalizeString(val: any, normalizer?: StringNormalizer): string;
/**
 * Returns a value as boolean, which is not (null) and (undefined).
 *
 * @param {any} val The value to convert.
 * @param {boolean} [defaultVal] The custom default value if 'val' is (null) or (undefined).
 *
 * @return {boolean} 'val' as boolean.
 */
export declare function toBooleanSafe(val: any, defaultVal?: boolean): boolean;
/**
 * Converts an EOL enum value to a string.
 *
 * @param {vscode.EndOfLine} [eol] The (optional) enum value.
 *
 * @return string The EOL string.
 */
export declare function toEOL(eol?: vscode.EndOfLine): string;
/**
 * Returns a value as string, which is not (null) and (undefined).
 *
 * @param {any} val The value to convert.
 * @param {string} [defaultVal] The custom default value if 'val' is (null) or (undefined).
 *
 * @return {string} 'val' as string.
 */
export declare function toStringSafe(val: any, defaultVal?: string): string;
/**
 * Runs a task with progress information.
 *
 * @param {ProgressTask<TResult>} task The task to execute.
 * @param {ProgressOptions} [options] Additional options.
 *
 * @return {Promise<TResult>} The promise with the result.
 */
export declare function withProgress<TResult = any>(task: ProgressTask<TResult>, options?: ProgressOptions): Promise<TResult>;
