/* eslint-disable */
import { Collection } from "./collection";
import { BaseNFT } from "./nft";
import { SubToken } from "./sub_token";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

export interface GenesisState {
  collections: Collection[];
  nfts: BaseNFT[];
  subTokens: { [key: string]: SubTokens };
}

export interface GenesisState_SubTokensEntry {
  key: string;
  value: SubTokens | undefined;
}

export interface SubTokens {
  subTokens: SubToken[];
}

function createBaseGenesisState(): GenesisState {
  return { collections: [], nfts: [], subTokens: {} };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      BaseNFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.subTokens).forEach(([key, value]) => {
      GenesisState_SubTokensEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nfts.push(BaseNFT.decode(reader, reader.uint32()));
          break;
        case 3:
          const entry3 = GenesisState_SubTokensEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.subTokens[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      collections: Array.isArray(object?.collections)
        ? object.collections.map((e: any) => Collection.fromJSON(e))
        : [],
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => BaseNFT.fromJSON(e))
        : [],
      subTokens: isObject(object.subTokens)
        ? Object.entries(object.subTokens).reduce<{ [key: string]: SubTokens }>(
            (acc, [key, value]) => {
              acc[key] = SubTokens.fromJSON(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map((e) =>
        e ? Collection.toJSON(e) : undefined
      );
    } else {
      obj.collections = [];
    }
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? BaseNFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    obj.subTokens = {};
    if (message.subTokens) {
      Object.entries(message.subTokens).forEach(([k, v]) => {
        obj.subTokens[k] = SubTokens.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.collections =
      object.collections?.map((e) => Collection.fromPartial(e)) || [];
    message.nfts = object.nfts?.map((e) => BaseNFT.fromPartial(e)) || [];
    message.subTokens = Object.entries(object.subTokens ?? {}).reduce<{
      [key: string]: SubTokens;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = SubTokens.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenesisState_SubTokensEntry(): GenesisState_SubTokensEntry {
  return { key: "", value: undefined };
}

export const GenesisState_SubTokensEntry = {
  encode(
    message: GenesisState_SubTokensEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SubTokens.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_SubTokensEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_SubTokensEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = SubTokens.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_SubTokensEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? SubTokens.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GenesisState_SubTokensEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? SubTokens.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState_SubTokensEntry>, I>>(
    object: I
  ): GenesisState_SubTokensEntry {
    const message = createBaseGenesisState_SubTokensEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? SubTokens.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseSubTokens(): SubTokens {
  return { subTokens: [] };
}

export const SubTokens = {
  encode(
    message: SubTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subTokens) {
      SubToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subTokens.push(SubToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubTokens {
    return {
      subTokens: Array.isArray(object?.subTokens)
        ? object.subTokens.map((e: any) => SubToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubTokens): unknown {
    const obj: any = {};
    if (message.subTokens) {
      obj.subTokens = message.subTokens.map((e) =>
        e ? SubToken.toJSON(e) : undefined
      );
    } else {
      obj.subTokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubTokens>, I>>(
    object: I
  ): SubTokens {
    const message = createBaseSubTokens();
    message.subTokens =
      object.subTokens?.map((e) => SubToken.fromPartial(e)) || [];
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
