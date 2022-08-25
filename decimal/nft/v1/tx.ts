/* eslint-disable */
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

export interface MsgMintNFT {
  sender: string;
  recipient: string;
  id: string;
  denom: string;
  quantity: string;
  tokenUri: string;
  reserve: Coin | undefined;
  allowMint: boolean;
}

export interface MsgMintNFTResponse {}

export interface MsgTransferNFT {
  sender: string;
  recipient: string;
  id: string;
  denom: string;
  subTokenIds: number[];
}

export interface MsgTransferNFTResponse {}

export interface MsgEditNFTMetadata {
  sender: string;
  id: string;
  denom: string;
  tokenUri: string;
}

export interface MsgEditNFTMetadataResponse {}

export interface MsgBurnNFT {
  sender: string;
  id: string;
  denom: string;
  subTokenIds: number[];
}

export interface MsgBurnNFTResponse {}

export interface MsgUpdateReserveNFT {
  sender: string;
  id: string;
  denom: string;
  subTokenIds: number[];
  newReserve: Coin | undefined;
}

export interface MsgUpdateReserveNFTResponse {}

function createBaseMsgMintNFT(): MsgMintNFT {
  return {
    sender: "",
    recipient: "",
    id: "",
    denom: "",
    quantity: "",
    tokenUri: "",
    reserve: undefined,
    allowMint: false,
  };
}

export const MsgMintNFT = {
  encode(
    message: MsgMintNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.quantity !== "") {
      writer.uint32(42).string(message.quantity);
    }
    if (message.tokenUri !== "") {
      writer.uint32(50).string(message.tokenUri);
    }
    if (message.reserve !== undefined) {
      Coin.encode(message.reserve, writer.uint32(58).fork()).ldelim();
    }
    if (message.allowMint === true) {
      writer.uint32(64).bool(message.allowMint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.quantity = reader.string();
          break;
        case 6:
          message.tokenUri = reader.string();
          break;
        case 7:
          message.reserve = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.allowMint = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      id: isSet(object.id) ? String(object.id) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      tokenUri: isSet(object.tokenUri) ? String(object.tokenUri) : "",
      reserve: isSet(object.reserve)
        ? Coin.fromJSON(object.reserve)
        : undefined,
      allowMint: isSet(object.allowMint) ? Boolean(object.allowMint) : false,
    };
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.id !== undefined && (obj.id = message.id);
    message.denom !== undefined && (obj.denom = message.denom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    message.reserve !== undefined &&
      (obj.reserve = message.reserve
        ? Coin.toJSON(message.reserve)
        : undefined);
    message.allowMint !== undefined && (obj.allowMint = message.allowMint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFT>, I>>(
    object: I
  ): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.id = object.id ?? "";
    message.denom = object.denom ?? "";
    message.quantity = object.quantity ?? "";
    message.tokenUri = object.tokenUri ?? "";
    message.reserve =
      object.reserve !== undefined && object.reserve !== null
        ? Coin.fromPartial(object.reserve)
        : undefined;
    message.allowMint = object.allowMint ?? false;
    return message;
  },
};

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {};
}

export const MsgMintNFTResponse = {
  encode(
    _: MsgMintNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintNFTResponse {
    return {};
  },

  toJSON(_: MsgMintNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(
    _: I
  ): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    return message;
  },
};

function createBaseMsgTransferNFT(): MsgTransferNFT {
  return { sender: "", recipient: "", id: "", denom: "", subTokenIds: [] };
}

export const MsgTransferNFT = {
  encode(
    message: MsgTransferNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    writer.uint32(42).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
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

  fromJSON(object: any): MsgTransferNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      id: isSet(object.id) ? String(object.id) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.id !== undefined && (obj.id = message.id);
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFT>, I>>(
    object: I
  ): MsgTransferNFT {
    const message = createBaseMsgTransferNFT();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.id = object.id ?? "";
    message.denom = object.denom ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return {};
}

export const MsgTransferNFTResponse = {
  encode(
    _: MsgTransferNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferNFTResponse {
    return {};
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTResponse>, I>>(
    _: I
  ): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  },
};

function createBaseMsgEditNFTMetadata(): MsgEditNFTMetadata {
  return { sender: "", id: "", denom: "", tokenUri: "" };
}

export const MsgEditNFTMetadata = {
  encode(
    message: MsgEditNFTMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.tokenUri !== "") {
      writer.uint32(34).string(message.tokenUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditNFTMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNFTMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.tokenUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditNFTMetadata {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      tokenUri: isSet(object.tokenUri) ? String(object.tokenUri) : "",
    };
  },

  toJSON(message: MsgEditNFTMetadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.denom !== undefined && (obj.denom = message.denom);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditNFTMetadata>, I>>(
    object: I
  ): MsgEditNFTMetadata {
    const message = createBaseMsgEditNFTMetadata();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.denom = object.denom ?? "";
    message.tokenUri = object.tokenUri ?? "";
    return message;
  },
};

function createBaseMsgEditNFTMetadataResponse(): MsgEditNFTMetadataResponse {
  return {};
}

export const MsgEditNFTMetadataResponse = {
  encode(
    _: MsgEditNFTMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgEditNFTMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditNFTMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgEditNFTMetadataResponse {
    return {};
  },

  toJSON(_: MsgEditNFTMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditNFTMetadataResponse>, I>>(
    _: I
  ): MsgEditNFTMetadataResponse {
    const message = createBaseMsgEditNFTMetadataResponse();
    return message;
  },
};

function createBaseMsgBurnNFT(): MsgBurnNFT {
  return { sender: "", id: "", denom: "", subTokenIds: [] };
}

export const MsgBurnNFT = {
  encode(
    message: MsgBurnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
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

  fromJSON(object: any): MsgBurnNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: MsgBurnNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFT>, I>>(
    object: I
  ): MsgBurnNFT {
    const message = createBaseMsgBurnNFT();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.denom = object.denom ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnNFTResponse(): MsgBurnNFTResponse {
  return {};
}

export const MsgBurnNFTResponse = {
  encode(
    _: MsgBurnNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnNFTResponse {
    return {};
  },

  toJSON(_: MsgBurnNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnNFTResponse>, I>>(
    _: I
  ): MsgBurnNFTResponse {
    const message = createBaseMsgBurnNFTResponse();
    return message;
  },
};

function createBaseMsgUpdateReserveNFT(): MsgUpdateReserveNFT {
  return {
    sender: "",
    id: "",
    denom: "",
    subTokenIds: [],
    newReserve: undefined,
  };
}

export const MsgUpdateReserveNFT = {
  encode(
    message: MsgUpdateReserveNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.newReserve !== undefined) {
      Coin.encode(message.newReserve, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateReserveNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReserveNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.subTokenIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          message.newReserve = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateReserveNFT {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      subTokenIds: Array.isArray(object?.subTokenIds)
        ? object.subTokenIds.map((e: any) => Number(e))
        : [],
      newReserve: isSet(object.newReserve)
        ? Coin.fromJSON(object.newReserve)
        : undefined,
    };
  },

  toJSON(message: MsgUpdateReserveNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    message.newReserve !== undefined &&
      (obj.newReserve = message.newReserve
        ? Coin.toJSON(message.newReserve)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateReserveNFT>, I>>(
    object: I
  ): MsgUpdateReserveNFT {
    const message = createBaseMsgUpdateReserveNFT();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.denom = object.denom ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    message.newReserve =
      object.newReserve !== undefined && object.newReserve !== null
        ? Coin.fromPartial(object.newReserve)
        : undefined;
    return message;
  },
};

function createBaseMsgUpdateReserveNFTResponse(): MsgUpdateReserveNFTResponse {
  return {};
}

export const MsgUpdateReserveNFTResponse = {
  encode(
    _: MsgUpdateReserveNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateReserveNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReserveNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateReserveNFTResponse {
    return {};
  },

  toJSON(_: MsgUpdateReserveNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateReserveNFTResponse>, I>>(
    _: I
  ): MsgUpdateReserveNFTResponse {
    const message = createBaseMsgUpdateReserveNFTResponse();
    return message;
  },
};

export interface Msg {
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  EditNFTMetadata(
    request: MsgEditNFTMetadata
  ): Promise<MsgEditNFTMetadataResponse>;
  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  UpdateReserveNFT(
    request: MsgUpdateReserveNFT
  ): Promise<MsgUpdateReserveNFTResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MintNFT = this.MintNFT.bind(this);
    this.TransferNFT = this.TransferNFT.bind(this);
    this.EditNFTMetadata = this.EditNFTMetadata.bind(this);
    this.BurnNFT = this.BurnNFT.bind(this);
    this.UpdateReserveNFT = this.UpdateReserveNFT.bind(this);
  }
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "MintNFT", data);
    return promise.then((data) =>
      MsgMintNFTResponse.decode(new _m0.Reader(data))
    );
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "TransferNFT", data);
    return promise.then((data) =>
      MsgTransferNFTResponse.decode(new _m0.Reader(data))
    );
  }

  EditNFTMetadata(
    request: MsgEditNFTMetadata
  ): Promise<MsgEditNFTMetadataResponse> {
    const data = MsgEditNFTMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.nft.v1.Msg",
      "EditNFTMetadata",
      data
    );
    return promise.then((data) =>
      MsgEditNFTMetadataResponse.decode(new _m0.Reader(data))
    );
  }

  BurnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "BurnNFT", data);
    return promise.then((data) =>
      MsgBurnNFTResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateReserveNFT(
    request: MsgUpdateReserveNFT
  ): Promise<MsgUpdateReserveNFTResponse> {
    const data = MsgUpdateReserveNFT.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.nft.v1.Msg",
      "UpdateReserveNFT",
      data
    );
    return promise.then((data) =>
      MsgUpdateReserveNFTResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
