/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.coin.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /** title of the base coin */
  baseTitle: string;
  /** symbol of the base coin (denom) */
  baseSymbol: string;
  /** initial volume of the base coin */
  baseInitialVolume: string;
}

function createBaseParams(): Params {
  return { baseTitle: "", baseSymbol: "", baseInitialVolume: "" };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseTitle !== "") {
      writer.uint32(10).string(message.baseTitle);
    }
    if (message.baseSymbol !== "") {
      writer.uint32(18).string(message.baseSymbol);
    }
    if (message.baseInitialVolume !== "") {
      writer.uint32(26).string(message.baseInitialVolume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseTitle = reader.string();
          break;
        case 2:
          message.baseSymbol = reader.string();
          break;
        case 3:
          message.baseInitialVolume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      baseTitle: isSet(object.baseTitle) ? String(object.baseTitle) : "",
      baseSymbol: isSet(object.baseSymbol) ? String(object.baseSymbol) : "",
      baseInitialVolume: isSet(object.baseInitialVolume)
        ? String(object.baseInitialVolume)
        : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.baseTitle !== undefined && (obj.baseTitle = message.baseTitle);
    message.baseSymbol !== undefined && (obj.baseSymbol = message.baseSymbol);
    message.baseInitialVolume !== undefined &&
      (obj.baseInitialVolume = message.baseInitialVolume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.baseTitle = object.baseTitle ?? "";
    message.baseSymbol = object.baseSymbol ?? "";
    message.baseInitialVolume = object.baseInitialVolume ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
