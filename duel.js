const Cos = require('@coschain/cosjs');
const crypto = require('crypto');

class Gladiator {
	// account: string;
	// priv_key: string;
	// contract_owner: string;
	// contract_name: string;
	constructor(acc, key, contract_owner, contract_name, network_type) {
		this.account = acc;
		this.priv_key = key;
		this.contract_owner = contract_owner;
		this.contract_name = contract_name;
		if(network_type === 'testnet') {
			this._cos = new Cos("test", "https://testnode.contentos.io");
		} else if(network_type === 'mainnet') {
			this._cos = new Cos("test", "https://mainnode.contentos.io");
		}
		this._cos.wallet.addAccount(this.account, this.priv_key);
	}

	open_arena(referee, arena_id, stake) {
		let checksum = crypto.createHash('sha256').update(arena_id).digest('hex');
		let buf = Buffer.from(checksum, 'hex');
		var checksumBin = [];
		var i;
		for (i=0; i<32; i++) {
			checksumBin.push(buf.readUInt8(i));
		}

		let openParam = [referee, checksumBin];
		let openParamStr = JSON.stringify(openParam);
		(async() => {
		  let result = await this._cos.wallet.contractCall(this.account, this.contract_owner, this.contract_name, "open_arena", openParamStr, stake);
		  console.log(result.invoice);
		})();
	}

	join_arena(creator, referee, arena_id, stake) {
		let joinParamStr = JSON.stringify([creator, referee, arena_id]);
		(async() => {
		  let result = await this._cos.wallet.contractCall(this.account, this.contract_owner, this.contract_name, "join_arena", joinParamStr, stake);
		  console.log(result.invoice);
		})();
	}

	close_arena(creator, winner) {
		let closeParamStr = JSON.stringify([creator, winner]);
		(async() => {
		  let result = await this._cos.wallet.contractCall(this.account, this.contract_owner, this.contract_name, "close_arena", closeParamStr, "0.000000");
		  console.log(result.invoice);
		})();
	}
}
exports.Gladiator = Gladiator;
