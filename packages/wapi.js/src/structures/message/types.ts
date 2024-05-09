/**
 * Enum representing the types of messages.
 */
export enum MessageTypeEnum {
  Text = "text",
  Audio = "audio",
  Video = "video",
  Contacts = "contacts",
  Document = "document",
  Image = "image",
  Location = "location",
  Interactive = "interactive",
  Sticker = "sticker",
  Reaction = "reaction",
  Template = "template",
}

/**
 * Enum representing the language codes.
 */
export enum LanguageEnum {
  Afrikaans = "af",
  Albanian = "sq",
  Arabic = "ar",
  Azerbaijani = "az",
  Bengali = "bn",
  Bulgarian = "bg",
  Catalan = "ca",
  ChineseChn = "zh_CN",
  ChineseHkg = "zh_HK",
  ChineseTai = "zh_TW",
  Croatian = "hr",
  Czech = "cs",
  Danish = "da",
  Dutch = "nl",
  English = "en",
  EnglishUK = "en_GB",
  EnglishUS = "en_US",
  Estonian = "et",
  Filipino = "fil",
  Finnish = "fi",
  French = "fr",
  Georgian = "ka",
  German = "de",
  Greek = "el",
  Gujarati = "gu",
  Hausa = "ha",
  Hebrew = "he",
  Hindi = "hi",
  Hungarian = "hu",
  Indonesian = "id",
  Irish = "ga",
  Italian = "it",
  Japanese = "ja",
  Kannada = "kn",
  Kazakh = "kk",
  Kinyarwanda = "rw_RW",
  Korean = "ko",
  Kyrgyz = "ky_KG",
  Lao = "lo",
  Latvian = "lv",
  Lithuanian = "lt",
  Macedonian = "mk",
  Malay = "ms",
  Malayalam = "ml",
  Marathi = "mr",
  Norwegian = "nb",
  Persian = "fa",
  Polish = "pl",
  PortugueseBR = "pt_BR",
  PortuguesePOR = "pt_PT",
  Punjabi = "pa",
  Romanian = "ro",
  Russian = "ru",
  Serbian = "sr",
  Slovak = "sk",
  Slovenian = "sl",
  Spanish = "es",
  SpanishARG = "es_AR",
  SpanishSPA = "es_ES",
  SpanishMEX = "es_MX",
  Swahili = "sw",
  Swedish = "sv",
  Tamil = "ta",
  Telugu = "te",
  Thai = "th",
  Turkish = "tr",
  Ukrainian = "uk",
  Urdu = "ur",
  Uzbek = "uz",
  Vietnamese = "vi",
  Zulu = "zu",
}

/**
 * Enum representing the types of components in a template message.
 */
export enum TemplateMessageComponentTypeEnum {
  Header = "header",
  Body = "body",
  Button = "button",
}

/**
 * Enum representing the types of button components in a template message.
 */
export enum TemplateMessageButtonComponentTypeEnum {
  QuickReply = "quick_reply",
  Url = "url",
  Catalog = "catalog",
}
