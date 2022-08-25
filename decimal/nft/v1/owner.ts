/* eslint-disable */
import * as Long from "long";
import { OwnerCollection } from "./collection";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

export interface Owner {
  address: string;
  collections: OwnerCollection[];
}

export interface TokenOwner {
  address: string;
  subTokenIds: number[];
}

function createBaseOwner(): Owner {
  return { address: "", collections: [] };
}

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.collections) {
      OwnerCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.collections.push(
            OwnerCollection.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      collections: Array.isArray(object?.collections)
        ? object.collections.map((e: any) => OwnerCollection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.collections) {
      obj.collections = message.collections.map((e) =>
        e ? OwnerCollection.toJSON(e) : undefined
      );
    } else {
      obj.collections = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.collections =
      object.collections?.map((e) => OwnerCollection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTokenOwner(): TokenOwner {
  return { address: "", subTokenIds: [] };
}

export const TokenOwner = {
  encode(
    message: TokenOwner,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    writer.uint32(18).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.subTokenIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenOwner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: TokenOwner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenOwner>, I>>(
    object: I
  ): TokenOwner {
    const message = createBaseTokenOwner();
    message.address = object.address ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
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
