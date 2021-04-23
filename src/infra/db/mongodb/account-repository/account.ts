import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../../helpers/mongo-helper'

const COLLECTION_NAME = 'accounts'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const collection = await MongoHelper.getCollection(COLLECTION_NAME)
    const result = await collection.insertOne(accountData)
    return MongoHelper.map(result.ops[0])
  }
}
