/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.coin.v1";

export interface Coin {
  title: string;
  symbol: string;
  crr: number;
  reserve: string;
  volume: string;
  limitVolume: string;
  creator: string;
  identity: string;
}

function createBaseCoin(): Coin {
  return {
    title: "",
    symbol: "",
    crr: 0,
    reserve: "",
    volume: "",
    limitVolume: "",
    creator: "",
    identity: "",
  };
}

export const Coin = {
  encode(message: Coin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.crr !== 0) {
      writer.uint32(24).uint64(message.crr);
    }
    if (message.reserve !== "") {
      writer.uint32(34).string(message.reserve);
    }
    if (message.volume !== "") {
      writer.uint32(42).string(message.volume);
    }
    if (message.limitVolume !== "") {
      writer.uint32(50).string(message.limitVolume);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    if (message.identity !== "") {
      writer.uint32(66).string(message.identity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.crr = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.reserve = reader.string();
          break;
        case 5:
          message.volume = reader.string();
          break;
        case 6:
          message.limitVolume = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        case 8:
          message.identity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Coin {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      crr: isSet(object.crr) ? Number(object.crr) : 0,
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
      volume: isSet(object.volume) ? String(object.volume) : "",
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: Coin): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.crr !== undefined && (obj.crr = Math.round(message.crr));
    message.reserve !== undefined && (obj.reserve = message.reserve);
    message.volume !== undefined && (obj.volume = message.volume);
    message.limitVolume !== undefined &&
      (obj.limitVolume = message.limitVolume);
    message.creator !== undefined && (obj.creator = message.creator);
    message.identity !== undefined && (obj.identity = message.identity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Coin>, I>>(object: I): Coin {
    const message = createBaseCoin();
    message.title = object.title ?? "";
    message.symbol = object.symbol ?? "";
    message.crr = object.crr ?? 0;
    message.reserve = object.reserve ?? "";
    message.volume = object.volume ?? "";
    message.limitVolume = object.limitVolume ?? "";
    message.creator = object.creator ?? "";
    message.identity = object.identity ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
