/* eslint-disable */
import { TokenOwner } from "./owner";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

export interface BaseNFT {
  id: string;
  owners: TokenOwner[];
  creator: string;
  tokenUri: string;
  reserve: Coin | undefined;
  allowMint: boolean;
}

function createBaseBaseNFT(): BaseNFT {
  return {
    id: "",
    owners: [],
    creator: "",
    tokenUri: "",
    reserve: undefined,
    allowMint: false,
  };
}

export const BaseNFT = {
  encode(
    message: BaseNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.owners) {
      TokenOwner.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.tokenUri !== "") {
      writer.uint32(34).string(message.tokenUri);
    }
    if (message.reserve !== undefined) {
      Coin.encode(message.reserve, writer.uint32(42).fork()).ldelim();
    }
    if (message.allowMint === true) {
      writer.uint32(48).bool(message.allowMint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owners.push(TokenOwner.decode(reader, reader.uint32()));
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.tokenUri = reader.string();
          break;
        case 5:
          message.reserve = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.allowMint = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) => TokenOwner.fromJSON(e))
        : [],
      creator: isSet(object.creator) ? String(object.creator) : "",
      tokenUri: isSet(object.tokenUri) ? String(object.tokenUri) : "",
      reserve: isSet(object.reserve)
        ? Coin.fromJSON(object.reserve)
        : undefined,
      allowMint: isSet(object.allowMint) ? Boolean(object.allowMint) : false,
    };
  },

  toJSON(message: BaseNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.owners) {
      obj.owners = message.owners.map((e) =>
        e ? TokenOwner.toJSON(e) : undefined
      );
    } else {
      obj.owners = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    message.reserve !== undefined &&
      (obj.reserve = message.reserve
        ? Coin.toJSON(message.reserve)
        : undefined);
    message.allowMint !== undefined && (obj.allowMint = message.allowMint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseNFT>, I>>(object: I): BaseNFT {
    const message = createBaseBaseNFT();
    message.id = object.id ?? "";
    message.owners = object.owners?.map((e) => TokenOwner.fromPartial(e)) || [];
    message.creator = object.creator ?? "";
    message.tokenUri = object.tokenUri ?? "";
    message.reserve =
      object.reserve !== undefined && object.reserve !== null
        ? Coin.fromPartial(object.reserve)
        : undefined;
    message.allowMint = object.allowMint ?? false;
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
