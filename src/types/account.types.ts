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
