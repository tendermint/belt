/**
 * A `Uint8Array` of binary data
 */
export type Bytes = Uint8Array;

/**
 * A Base64-encoded string.
 */
export type Base64String = string;

/**
 * A "raw" binary-encoded string.
 */
export type BinaryString = string;

/**
 * A JSON-encoded string.
 */
export type JSONString = string;

/**
 * A JSON object.
 */
export interface JSONObject {
    [key: string]: JSONValue;
}

/**
 * A JSON array.
 */
export interface JSONArray extends Array<JSONValue> {
}

/**
 * A JSON value.
 */
export type JSONValue =
    string |
    number |
    boolean |
    null |
    JSONArray |
    JSONObject;
