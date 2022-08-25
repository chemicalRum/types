/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.coin.v1";

export interface Check {
  chainId: string;
  coin: string;
  amount: string;
  nonce: Uint8Array;
  dueBlock: number;
  lock: Uint8Array;
  v: string;
  r: string;
  s: string;
}

function createBaseCheck(): Check {
  return {
    chainId: "",
    coin: "",
    amount: "",
    nonce: new Uint8Array(),
    dueBlock: 0,
    lock: new Uint8Array(),
    v: "",
    r: "",
    s: "",
  };
}

export const Check = {
  encode(message: Check, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(34).bytes(message.nonce);
    }
    if (message.dueBlock !== 0) {
      writer.uint32(40).uint64(message.dueBlock);
    }
    if (message.lock.length !== 0) {
      writer.uint32(50).bytes(message.lock);
    }
    if (message.v !== "") {
      writer.uint32(58).string(message.v);
    }
    if (message.r !== "") {
      writer.uint32(66).string(message.r);
    }
    if (message.s !== "") {
      writer.uint32(74).string(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Check {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.nonce = reader.bytes();
          break;
        case 5:
          message.dueBlock = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.lock = reader.bytes();
          break;
        case 7:
          message.v = reader.string();
          break;
        case 8:
          message.r = reader.string();
          break;
        case 9:
          message.s = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Check {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
      dueBlock: isSet(object.dueBlock) ? Number(object.dueBlock) : 0,
      lock: isSet(object.lock)
        ? bytesFromBase64(object.lock)
        : new Uint8Array(),
      v: isSet(object.v) ? String(object.v) : "",
      r: isSet(object.r) ? String(object.r) : "",
      s: isSet(object.s) ? String(object.s) : "",
    };
  },

  toJSON(message: Check): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.coin !== undefined && (obj.coin = message.coin);
    message.amount !== undefined && (obj.amount = message.amount);
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.dueBlock !== undefined &&
      (obj.dueBlock = Math.round(message.dueBlock));
    message.lock !== undefined &&
      (obj.lock = base64FromBytes(
        message.lock !== undefined ? message.lock : new Uint8Array()
      ));
    message.v !== undefined && (obj.v = message.v);
    message.r !== undefined && (obj.r = message.r);
    message.s !== undefined && (obj.s = message.s);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Check>, I>>(object: I): Check {
    const message = createBaseCheck();
    message.chainId = object.chainId ?? "";
    message.coin = object.coin ?? "";
    message.amount = object.amount ?? "";
    message.nonce = object.nonce ?? new Uint8Array();
    message.dueBlock = object.dueBlock ?? 0;
    message.lock = object.lock ?? new Uint8Array();
    message.v = object.v ?? "";
    message.r = object.r ?? "";
    message.s = object.s ?? "";
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
