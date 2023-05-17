export interface IAccountSettings {
  wid: string;
  countryInstance: string;
  typeAccount: string;
  webhookUrl: string;
  webhookUrlToken: string;
  delaySendMessagesMilliseconds: number;
  markIncomingMessagesReaded: string;
  markIncomingMessagesReadedOnReply: string;
  sharedSession: string;
  proxyInstance: string;
  outgoingWebhook: string;
  outgoingMessageWebhook: string;
  outgoingAPIOutgoingMessageWebhook: string;
  incomingWebhook: string;
  deviceWebhook: string;
  statusInstanceWebhook: string;
  stateWebhook: string;
  enableMessagesHistory: string;
  keepOnlineStatus: string;
}

export interface IAuthData {
  idInstance: string;
  apiToketInstance: string;
}

export interface IContact {
  id: string;
  name: string;
  type: string;
}

export interface IContactInfo {
  chatId: string;
  avatar?: string;
  name?: string;
  email?: string;
  category?: string;
  description?: string;
}
