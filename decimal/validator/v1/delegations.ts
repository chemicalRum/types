/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.validator.v1";

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /**
   * coin defines amount of coins delegated. For NFT case it contains total
   * reserve of delegated NFTs instead of actually delegated coins.
   */
  coin: Coin | undefined;
  /** is_nft is true for NFT delegations. */
  isNft: boolean;
  /** nft_token_id defines NFT token ID for NFT delegation. */
  nftTokenId: string;
  /** nft_quantity defines quantity of delegated NFT tokens for NFT delegation. */
  nftQuantity: number;
}

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creationHeight: number;
  /** completion_time is the unix time for unbonding completion. */
  completionTime: Date | undefined;
  /**
   * coin defines amount of coins to receive at completion. For NFT case it contains total
   * reserve of delegated NFTs instead of actually delegated coins.
   */
  coin: Coin | undefined;
  /** is_nft is true for NFT delegations. */
  isNft: boolean;
  /** nft_token_id defines NFT token ID for NFT delegation. */
  nftTokenId: string;
  /** nft_quantity defines quantity of delegated NFT tokens for NFT delegation. */
  nftQuantity: number;
}

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validatorSrcAddress: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validatorDstAddress: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}

/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creationHeight: number;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime: Date | undefined;
  /** initial_balance defines the initial balance when redelegation started. */
  initialBalance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  sharesDst: string;
}

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation: Delegation | undefined;
  balance: Coin | undefined;
}

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegationEntry: RedelegationEntry | undefined;
  balance: string;
}

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation: Redelegation | undefined;
  entries: RedelegationEntryResponse[];
}

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}

/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}

/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}

function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    coin: undefined,
    isNft: false,
    nftTokenId: "",
    nftQuantity: 0,
  };
}

export const Delegation = {
  encode(
    message: Delegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.isNft === true) {
      writer.uint32(32).bool(message.isNft);
    }
    if (message.nftTokenId !== "") {
      writer.uint32(42).string(message.nftTokenId);
    }
    if (message.nftQuantity !== 0) {
      writer.uint32(48).uint64(message.nftQuantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.isNft = reader.bool();
          break;
        case 5:
          message.nftTokenId = reader.string();
          break;
        case 6:
          message.nftQuantity = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      isNft: isSet(object.isNft) ? Boolean(object.isNft) : false,
      nftTokenId: isSet(object.nftTokenId) ? String(object.nftTokenId) : "",
      nftQuantity: isSet(object.nftQuantity) ? Number(object.nftQuantity) : 0,
    };
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.isNft !== undefined && (obj.isNft = message.isNft);
    message.nftTokenId !== undefined && (obj.nftTokenId = message.nftTokenId);
    message.nftQuantity !== undefined &&
      (obj.nftQuantity = Math.round(message.nftQuantity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegation>, I>>(
    object: I
  ): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.isNft = object.isNft ?? false;
    message.nftTokenId = object.nftTokenId ?? "";
    message.nftQuantity = object.nftQuantity ?? 0;
    return message;
  },
};

function createBaseUnbondingDelegation(): UnbondingDelegation {
  return { delegatorAddress: "", validatorAddress: "", entries: [] };
}

export const UnbondingDelegation = {
  encode(
    message: UnbondingDelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(
            UnbondingDelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? UnbondingDelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingDelegation>, I>>(
    object: I
  ): UnbondingDelegation {
    const message = createBaseUnbondingDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries =
      object.entries?.map((e) => UnbondingDelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
  return {
    creationHeight: 0,
    completionTime: undefined,
    coin: undefined,
    isNft: false,
    nftTokenId: "",
    nftQuantity: 0,
  };
}

export const UnbondingDelegationEntry = {
  encode(
    message: UnbondingDelegationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creationHeight !== 0) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    if (message.isNft === true) {
      writer.uint32(32).bool(message.isNft);
    }
    if (message.nftTokenId !== "") {
      writer.uint32(42).string(message.nftTokenId);
    }
    if (message.nftQuantity !== 0) {
      writer.uint32(48).uint64(message.nftQuantity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnbondingDelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingDelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.isNft = reader.bool();
          break;
        case 5:
          message.nftTokenId = reader.string();
          break;
        case 6:
          message.nftQuantity = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegationEntry {
    return {
      creationHeight: isSet(object.creationHeight)
        ? Number(object.creationHeight)
        : 0,
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      isNft: isSet(object.isNft) ? Boolean(object.isNft) : false,
      nftTokenId: isSet(object.nftTokenId) ? String(object.nftTokenId) : "",
      nftQuantity: isSet(object.nftQuantity) ? Number(object.nftQuantity) : 0,
    };
  },

  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = Math.round(message.creationHeight));
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.isNft !== undefined && (obj.isNft = message.isNft);
    message.nftTokenId !== undefined && (obj.nftTokenId = message.nftTokenId);
    message.nftQuantity !== undefined &&
      (obj.nftQuantity = Math.round(message.nftQuantity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingDelegationEntry>, I>>(
    object: I
  ): UnbondingDelegationEntry {
    const message = createBaseUnbondingDelegationEntry();
    message.creationHeight = object.creationHeight ?? 0;
    message.completionTime = object.completionTime ?? undefined;
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.isNft = object.isNft ?? false;
    message.nftTokenId = object.nftTokenId ?? "";
    message.nftQuantity = object.nftQuantity ?? 0;
    return message;
  },
};

function createBaseRedelegation(): Redelegation {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
    entries: [],
  };
}

export const Redelegation = {
  encode(
    message: Redelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(
            RedelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Redelegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress)
        ? String(object.validatorSrcAddress)
        : "",
      validatorDstAddress: isSet(object.validatorDstAddress)
        ? String(object.validatorDstAddress)
        : "",
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => RedelegationEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? RedelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Redelegation>, I>>(
    object: I
  ): Redelegation {
    const message = createBaseRedelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries =
      object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRedelegationEntry(): RedelegationEntry {
  return {
    creationHeight: 0,
    completionTime: undefined,
    initialBalance: "",
    sharesDst: "",
  };
}

export const RedelegationEntry = {
  encode(
    message: RedelegationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creationHeight !== 0) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntry {
    return {
      creationHeight: isSet(object.creationHeight)
        ? Number(object.creationHeight)
        : 0,
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
      initialBalance: isSet(object.initialBalance)
        ? String(object.initialBalance)
        : "",
      sharesDst: isSet(object.sharesDst) ? String(object.sharesDst) : "",
    };
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = Math.round(message.creationHeight));
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== undefined &&
      (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationEntry>, I>>(
    object: I
  ): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight ?? 0;
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    return message;
  },
};

function createBaseDelegationResponse(): DelegationResponse {
  return { delegation: undefined, balance: undefined };
}

export const DelegationResponse = {
  encode(
    message: DelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationResponse {
    return {
      delegation: isSet(object.delegation)
        ? Delegation.fromJSON(object.delegation)
        : undefined,
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? Delegation.toJSON(message.delegation)
        : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationResponse>, I>>(
    object: I
  ): DelegationResponse {
    const message = createBaseDelegationResponse();
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? Delegation.fromPartial(object.delegation)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
  return { redelegationEntry: undefined, balance: "" };
}

export const RedelegationEntryResponse = {
  encode(
    message: RedelegationEntryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(
        message.redelegationEntry,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RedelegationEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntryResponse {
    return {
      redelegationEntry: isSet(object.redelegationEntry)
        ? RedelegationEntry.fromJSON(object.redelegationEntry)
        : undefined,
      balance: isSet(object.balance) ? String(object.balance) : "",
    };
  },

  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    message.redelegationEntry !== undefined &&
      (obj.redelegationEntry = message.redelegationEntry
        ? RedelegationEntry.toJSON(message.redelegationEntry)
        : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationEntryResponse>, I>>(
    object: I
  ): RedelegationEntryResponse {
    const message = createBaseRedelegationEntryResponse();
    message.redelegationEntry =
      object.redelegationEntry !== undefined &&
      object.redelegationEntry !== null
        ? RedelegationEntry.fromPartial(object.redelegationEntry)
        : undefined;
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseRedelegationResponse(): RedelegationResponse {
  return { redelegation: undefined, entries: [] };
}

export const RedelegationResponse = {
  encode(
    message: RedelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.redelegation !== undefined) {
      Redelegation.encode(
        message.redelegation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RedelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(
            RedelegationEntryResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationResponse {
    return {
      redelegation: isSet(object.redelegation)
        ? Redelegation.fromJSON(object.redelegation)
        : undefined,
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    message.redelegation !== undefined &&
      (obj.redelegation = message.redelegation
        ? Redelegation.toJSON(message.redelegation)
        : undefined);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? RedelegationEntryResponse.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationResponse>, I>>(
    object: I
  ): RedelegationResponse {
    const message = createBaseRedelegationResponse();
    message.redelegation =
      object.redelegation !== undefined && object.redelegation !== null
        ? Redelegation.fromPartial(object.redelegation)
        : undefined;
    message.entries =
      object.entries?.map((e) => RedelegationEntryResponse.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseDVPair(): DVPair {
  return { delegatorAddress: "", validatorAddress: "" };
}

export const DVPair = {
  encode(
    message: DVPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVPair {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
    };
  },

  toJSON(message: DVPair): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVPair>, I>>(object: I): DVPair {
    const message = createBaseDVPair();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseDVPairs(): DVPairs {
  return { pairs: [] };
}

export const DVPairs = {
  encode(
    message: DVPairs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVPairs {
    return {
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => DVPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? DVPair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVPairs>, I>>(object: I): DVPairs {
    const message = createBaseDVPairs();
    message.pairs = object.pairs?.map((e) => DVPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDVVTriplet(): DVVTriplet {
  return {
    delegatorAddress: "",
    validatorSrcAddress: "",
    validatorDstAddress: "",
  };
}

export const DVVTriplet = {
  encode(
    message: DVVTriplet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVVTriplet {
    return {
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : "",
      validatorSrcAddress: isSet(object.validatorSrcAddress)
        ? String(object.validatorSrcAddress)
        : "",
      validatorDstAddress: isSet(object.validatorDstAddress)
        ? String(object.validatorDstAddress)
        : "",
    };
  },

  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVVTriplet>, I>>(
    object: I
  ): DVVTriplet {
    const message = createBaseDVVTriplet();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  },
};

function createBaseDVVTriplets(): DVVTriplets {
  return { triplets: [] };
}

export const DVVTriplets = {
  encode(
    message: DVVTriplets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDVVTriplets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVVTriplets {
    return {
      triplets: Array.isArray(object?.triplets)
        ? object.triplets.map((e: any) => DVVTriplet.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map((e) =>
        e ? DVVTriplet.toJSON(e) : undefined
      );
    } else {
      obj.triplets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DVVTriplets>, I>>(
    object: I
  ): DVVTriplets {
    const message = createBaseDVVTriplets();
    message.triplets =
      object.triplets?.map((e) => DVVTriplet.fromPartial(e)) || [];
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
