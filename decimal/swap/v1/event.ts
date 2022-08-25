/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

export interface EventSwapInitialize {
  sender: string;
  from: string;
  destChain: number;
  recipient: string;
  amount: string;
  transactionNumber: string;
  tokenSymbol: string;
}

export interface EventSwapRedeem {
  sender: string;
  from: string;
  destChain: number;
  recipient: string;
  amount: string;
  transactionNumber: string;
  tokenSymbol: string;
}

export interface EventChainActivate {
  chainName: string;
  chainNumber: number;
}

export interface EventChainDeactivate {
  chainNumber: number;
}

function createBaseEventSwapInitialize(): EventSwapInitialize {
  return {
    sender: "",
    from: "",
    destChain: 0,
    recipient: "",
    amount: "",
    transactionNumber: "",
    tokenSymbol: "",
  };
}

export const EventSwapInitialize = {
  encode(
    message: EventSwapInitialize,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.destChain !== 0) {
      writer.uint32(24).uint32(message.destChain);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(50).string(message.transactionNumber);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(58).string(message.tokenSymbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwapInitialize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwapInitialize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.destChain = reader.uint32();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.transactionNumber = reader.string();
          break;
        case 7:
          message.tokenSymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSwapInitialize {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      from: isSet(object.from) ? String(object.from) : "",
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      transactionNumber: isSet(object.transactionNumber)
        ? String(object.transactionNumber)
        : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
    };
  },

  toJSON(message: EventSwapInitialize): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.from !== undefined && (obj.from = message.from);
    message.destChain !== undefined &&
      (obj.destChain = Math.round(message.destChain));
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.transactionNumber !== undefined &&
      (obj.transactionNumber = message.transactionNumber);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSwapInitialize>, I>>(
    object: I
  ): EventSwapInitialize {
    const message = createBaseEventSwapInitialize();
    message.sender = object.sender ?? "";
    message.from = object.from ?? "";
    message.destChain = object.destChain ?? 0;
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    return message;
  },
};

function createBaseEventSwapRedeem(): EventSwapRedeem {
  return {
    sender: "",
    from: "",
    destChain: 0,
    recipient: "",
    amount: "",
    transactionNumber: "",
    tokenSymbol: "",
  };
}

export const EventSwapRedeem = {
  encode(
    message: EventSwapRedeem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.destChain !== 0) {
      writer.uint32(24).uint32(message.destChain);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(50).string(message.transactionNumber);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(58).string(message.tokenSymbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwapRedeem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwapRedeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.destChain = reader.uint32();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.transactionNumber = reader.string();
          break;
        case 7:
          message.tokenSymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSwapRedeem {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      from: isSet(object.from) ? String(object.from) : "",
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      transactionNumber: isSet(object.transactionNumber)
        ? String(object.transactionNumber)
        : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
    };
  },

  toJSON(message: EventSwapRedeem): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.from !== undefined && (obj.from = message.from);
    message.destChain !== undefined &&
      (obj.destChain = Math.round(message.destChain));
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.transactionNumber !== undefined &&
      (obj.transactionNumber = message.transactionNumber);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSwapRedeem>, I>>(
    object: I
  ): EventSwapRedeem {
    const message = createBaseEventSwapRedeem();
    message.sender = object.sender ?? "";
    message.from = object.from ?? "";
    message.destChain = object.destChain ?? 0;
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    return message;
  },
};

function createBaseEventChainActivate(): EventChainActivate {
  return { chainName: "", chainNumber: 0 };
}

export const EventChainActivate = {
  encode(
    message: EventChainActivate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.chainNumber !== 0) {
      writer.uint32(16).uint32(message.chainNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventChainActivate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventChainActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.chainNumber = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventChainActivate {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      chainNumber: isSet(object.chainNumber) ? Number(object.chainNumber) : 0,
    };
  },

  toJSON(message: EventChainActivate): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.chainNumber !== undefined &&
      (obj.chainNumber = Math.round(message.chainNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventChainActivate>, I>>(
    object: I
  ): EventChainActivate {
    const message = createBaseEventChainActivate();
    message.chainName = object.chainName ?? "";
    message.chainNumber = object.chainNumber ?? 0;
    return message;
  },
};

function createBaseEventChainDeactivate(): EventChainDeactivate {
  return { chainNumber: 0 };
}

export const EventChainDeactivate = {
  encode(
    message: EventChainDeactivate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainNumber !== 0) {
      writer.uint32(8).uint32(message.chainNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventChainDeactivate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventChainDeactivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainNumber = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventChainDeactivate {
    return {
      chainNumber: isSet(object.chainNumber) ? Number(object.chainNumber) : 0,
    };
  },

  toJSON(message: EventChainDeactivate): unknown {
    const obj: any = {};
    message.chainNumber !== undefined &&
      (obj.chainNumber = Math.round(message.chainNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventChainDeactivate>, I>>(
    object: I
  ): EventChainDeactivate {
    const message = createBaseEventChainDeactivate();
    message.chainNumber = object.chainNumber ?? 0;
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
