import { AccountType, AccountSiginType, Gender } from '../store/account/types';

const accounts: AccountType[] = [
  {
    id: 'id1',
    pwd: 'pwd1',
    gender: Gender.male,
    name: '이름1',
    email: 'asidf1@gmail.com'
  },
  {
    id: 'id2',
    pwd: 'pwd2',
    gender: Gender.female,
    name: '이름2',
    email: 'asidf2@gmail.com'
  },
  {
    id: 'id3',
    pwd: 'pwd3',
    gender: Gender.male,
    name: '이름3',
    email: 'asidf3@gmail.com'
  }
];

export async function signIn(account: AccountSiginType): Promise<AccountType> {
  return new Promise<AccountType>((resolve, _) => {
    resolve(accounts.find((acc) => acc.id === account.id && acc.pwd === account.pwd));
  });
}