var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-dUh0EX/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/bundle-dUh0EX/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init) {
  const request = new Request(input, init);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
__name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    return Reflect.apply(target, thisArg, [
      stripCfConnectingIPHeader.apply(null, argArray)
    ]);
  }
});

// src/data/heroes_data.json
var heroes_data_default = [
  {
    id: "hero_130",
    name: "Airi",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/130_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "S\u1EAFc L\u1EBBm: N\u1ED9i t\u1EA1i:\xA0M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng gi\xFAp gi\u1EA3m th\u1EDDi gian h\u1ED3i c\u1EE7a Ki\u1EBFm kh\xED \u0111i 1 gi\xE2y.",
      s1: "Phi Ti\xEAu: Airi n\xE9m phi ti\xEAu v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi l\xE0m cho\xE1ng c\xE1c n\u1EA1n nh\xE2n tr\xFAng \u0111\xF2n trong tho\xE1ng ch\u1ED1c.",
      s2: "Ki\u1EBFm V\u0169: Airi m\xFAa ki\u1EBFm l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Chi\xEAu th\u1EE9c n\xE0y c\xF3 th\u1EC3 tung t\u1ED1i \u0111a 3 l\u01B0\u1EE3t tr\u01B0\u1EDBc khi ti\u1EBFn v\xE0o th\u1EDDi gian h\u1ED3i chi\xEAu.",
      s3: "Long Ki\u1EBFm: Airi tung Long ki\u1EBFm, g\xE2y \xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn c\xE1c m\u1EE5c ti\xEAu v\xE0 l\xE0m ch\u1EADm ch\xFAng. Ngay sau \u0111\xF3 Airi ti\u1EBFp t\u1EE5c tung ki\u1EBFm, g\xE2y l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD t\u01B0\u01A1ng t\u1EF1 v\xE0 l\xE0m cho\xE1ng c\xE1c n\u1EA1n nh\xE2n trong 1 gi\xE2y. M\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu gi\xFAp Airi nh\u1EADn l\xE1 ch\u1EAFn gi\xFAp ch\u1EB7n s\xE1t th\u01B0\u01A1ng. Ch\u01B0a h\u1EBFt, Airi c\xF2n \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y gi\u1EA3m d\u1EA7n trong 2.5 gi\xE2y k\xE8m 30% t\u1ED1c \u0111\xE1nh trong 8 gi\xE2y."
    },
    meta_data: {
      win_rate: 49.45,
      pick_rate: 8.19,
      ban_rate: 0.03
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_156",
    name: "Aleister",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/156_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ma thu\u1EADt \u0111en: N\u1ED9i t\u1EA1i: Aleister nguy\u1EC1n r\u1EE7a m\u1ED9t m\u1EE5c ti\xEAu v\u1EDBi m\u1ED7i k\u1EF9 n\u0103ng th\u1EE9 3. M\u1ED7i l\u1EA7n c\u1ED9ng d\u1ED3n th\u1EE9 3 s\u1EBD k\xEDch ho\u1EA1t m\u1ED9t v\u1EE5 n\u1ED5 g\xE2y\xA0s\xE1t th\u01B0\u01A1ng chu\u1EA9n.",
      s1: "V\xE1ch ng\u0103n h\u1EAFc \xE1m: Aleister tri\u1EC7u h\u1ED3i v\xE1ch ng\u0103n h\u1EAFc \xE1m, l\xE0m cho\xE1ng v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch. Th\u1EDDi \u0111i\u1EC3m ma tr\u1EADn g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 khi ma tr\u1EADn bi\u1EBFn m\u1EA5t s\u1EBD \u0111\u1EB7t m\u1ED9t d\u1EA5u \u1EA5n ma thu\u1EADt \u0111en l\xEAn k\u1EBB \u0111\u1ECBch.",
      s2: "Ma tr\u1EADn th\u1ED1ng kh\u1ED5: Aleister tri\u1EC7u h\u1ED3i m\u1ED9t ma tr\u1EADn li\xEAn t\u1EE5c g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn k\u1EBB th\xF9, m\u1ED7i l\u01B0\u1EE3t g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. M\u1ED7i l\u1EA7n g\xE2y s\xE1t th\u01B0\u01A1ng t\u1EA1o m\u1ED9t \u0111i\u1EC3m ma thu\u1EADt \u0111en.",
      s3: "Ng\u1EE5c t\xF9 v\u0129nh h\u1EB1ng: Aleister b\u1EABy k\u1EBB \u0111\u1ECBch trong nh\xE0 t\xF9 ma thu\u1EADt, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i l\u01B0\u1EE3t trong 2.5 gi\xE2y. Chi\xEAu th\u1EE9c c\u1EA7n ni\u1EC7m ch\xFA \u0111\u1EC3 th\u1EF1c hi\u1EC7n, t\u1ED1i \u0111a d\xE0i 3 gi\xE2y, tuy nhi\xEAn sau 0.7 gi\xE2y \u0111\u1EA7u n\u1EBFu th\u1EF1c hi\u1EC7n c\xE1c thao t\xE1c kh\xE1c c\xF3 th\u1EC3 h\u1EE7y."
    },
    meta_data: {
      win_rate: 48.86,
      pick_rate: 6.2,
      ban_rate: 19.45
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_118",
    name: "Alice",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/118_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "B\u01B0\u1EDBc ch\xE2n th\u1EA7n t\u1ED1c: N\u1ED9i t\u1EA1i: S\u1EED d\u1EE5ng m\u1ED9t k\u1EF9 n\u0103ng s\u1EBD t\u0103ng t\u1ED1c ch\u1EA1y trong 1 gi\xE2y.",
      s1: "V\u1EE5 n\u1ED5 th\u1EDDi kh\xF4ng: Alice g\u1ECDi \u0111\u1EBFn \xE1ng s\xE1ng m\u1EB7t tr\u1EDDi, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m cho\xE1ng nh\u1EEFng k\u1EBB th\xF9 tr\xFAng chi\xEAu.",
      s2: "L\xE1 ch\u1EAFn th\u1EDDi kh\xF4ng: Alice t\u1EA1o ra m\u1ED9t l\xE1 ch\u1EAFn cho \u0111\u1ED3ng minh v\xE0 l\xE0m t\u0103ng t\u1ED1c ch\u1EA1y c\u1EE7a h\u1ECD.",
      s3: 'D\xF2ng ch\u1EA3y th\u1EDDi kh\xF4ng: "Alice t\u1EA1o ra m\u1ED9t v\xF9ng n\u0103ng l\u01B0\u1EE3ng ma thu\u1EADt, m\u1ED7i 0.5 gi\xE2y g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, \u0111\u1ED3ng th\u1EDDi l\xE0m gi\u1EA3m gi\xE1p ph\xE9p v\xE0 t\u1ED1c ch\u1EA1y c\u1EE7a c\xE1c n\u1EA1n nh\xE2n trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng.Ngo\xE0i ra nh\u1EEFng k\u1EBB d\u1EA1i d\u1ED9t b\u01B0\u1EDBc v\xE0o v\xF9ng n\u0103ng l\u01B0\u1EE3ng n\xE0y s\u1EBD ph\u1EA3i ch\u1ECBu hi\u1EC7u \u1EE9ng c\xE2m l\u1EB7ng trong 1 gi\xE2y."'
    },
    meta_data: {
      win_rate: 50.14,
      pick_rate: 11.66,
      ban_rate: 0.45
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_537",
    name: "Allain",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/537_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ki\u1EBFm g\u1EA7m: N\u1ED9i t\u1EA1i: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Allain c\xF3 hi\u1EC7u \u1EE9ng \u0111\u1ED9t k\xEDch. Tung \u0111\xF3n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 Ki\u1EBFm l\u01B0u n g\xE2n tr\xFAng t\u01B0\u1EDBng \u0111\xEDch s\u1EBD gi\xFAp t\u0103ng Xuy\xEAn gi\xE1p v\xE0 Xuy\xEAn gi\xE1p ph\xE9p. \u0110\u1EA1t \u0111\u1EE7 s\u1ED1 l\u1EA7n \u0111\xE1nh tr\xFAng \u0111\u1ECBch s\u1EBD gi\xFAp b\u1EA3n th\xE2n h\u1ED3i m\xE1u.",
      s1: "Ki\u1EBFm l\u01B0u ng\xE2n: G\xE2y nhi\u1EC1u l\u1EA7n s\xE1t th\u01B0\u01A1ng v\xE0 h\u1EA5t tung \u0111\u1ECBch.",
      s2: "Ki\u1EBFm to\u1EA3 m\u1EC7nh: Allain vung ki\u1EBFm l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt v\xE0 l\xE0m ch\u1EADm ch\xFAng.",
      s3: "Ki\u1EBFm t\u1EA5t s\xE1t: Allain l\u1EADp t\u1EE9c bi\u1EBFn m\u1EA5t v\xE0 kh\xF3a 1 t\u01B0\u1EDBng \u0111\u1ECBch. Sau 1.5 gi\xE2y, h\u1EAFn ph\xF3ng xu\u1ED1ng v\u1ECB tr\xED k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n trong ph\u1EA1m vi."
    },
    meta_data: {
      win_rate: 47.18,
      pick_rate: 11.36,
      ban_rate: 0.34
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_193",
    name: "Amily",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/193_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110\u01A1n \u0111\u1EA3 \u0111\u1ED9c c\u01B0\u1EDBc: N\u1ED9i t\u1EA1i: Amily s\u1EDF h\u1EEFu kh\u1EA3 n\u0103ng chi\u1EBFn \u0111\u1EA5u \u0111i\xEAu luy\u1EC7n \u0111\u1EBFn m\u1EE9c c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 Li\xEAn ho\xE0n c\u01B0\u1EDBc ch\u1EC9 tr\xFAng m\u1ED9t m\u1EE5c ti\xEAu s\u1EBD g\xE2y th\xEAm 50% s\xE1t th\u01B0\u01A1ng",
      s1: "T\xE0ng \u0111ao k\xEDch: Amily ph\xF3ng t\xE0ng \u0111ao c\xF4ng k\xEDch m\u1EE5c ti\xEAu, v\u0169 kh\xED n\xE0y n\u1EA3y lan t\u1ED1i \u0111a 4 l\u1EA7n g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD k\xE8m hi\u1EC7u \u1EE9ng l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y, ri\xEAng n\u1EA1n nh\xE2n \u0111\u1EA7u ti\xEAn b\u1ECB l\xE0m ch\u1EADm m\u1EA1nh t\u1ED1c ch\u1EA1y trong 1 gi\xE2y. Sau khi c\xF4ng k\xEDch h\u1EBFt c\xE1c m\u1EE5c ti\xEAu, l\u01B0\u1EE1i \u0111ao n\u1EA3y tr\u1EDF v\u1EC1 b\u1EA3n th\xE2n gi\xFAp Amily t\u0103ng 20% t\u1ED1c ch\u1EA1y trong 3 gi\xE2y, v\xE0 h\u1ED3i m\xE1u k\xE8m 30% gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu n\xE0y.",
      s2: "Li\xEAn ho\xE0n c\u01B0\u1EDBc: K\xEDch ho\u1EA1t: Amily l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh tung hai c\xFA \u0111\xE1 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1EB7c bi\u1EC7t c\xFA \u0111\xE1 th\u1EE9 hai s\u1EBD g\xE2y hi\u1EC7u \u1EE9ng h\u1EA5t v\u0103ng v\xE0 c\u01B0\u1EDDng ho\xE1 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD k\xE8m hi\u1EC7u \u1EE9ng \u0111\xF2n \u0111\xE1nh.N\u1ED9i t\u1EA1i: Sau khi tho\xE1t kh\u1ECFi giao tranh Amily \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 h\u1ED3i 1% m\xE1u v\xE0 n\u0103ng l\u01B0\u1EE3ng t\u1ED1i \u0111a m\u1ED7i gi\xE2y",
      s3: "Cu\u1ED3ng b\u1EA1o c\u01B0\u1EDBc: Sau 1 gi\xE2y v\u1EADn c\xF4ng, Amily g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p di\u1EC7n r\u1ED9ng v\xE0 c\u01B0\u1EDDng ho\xE1 b\u1EA3n th\xE2n gi\xFAp t\u0103ng c\xF4ng v\u1EADt l\xFD, t\u1ED1c ch\u1EA1y c\xF9ng mi\u1EC5n th\u01B0\u01A1ng. Su\u1ED1t th\u1EDDi gian c\u01B0\u1EDDng ho\xE1 Amily g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn m\u1ED7i gi\xE2y; hi\u1EC7u \u1EE9ng k\xE9o d\xE0i 8 gi\xE2y"
    },
    meta_data: {
      win_rate: 48.91,
      pick_rate: 3.83,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_519",
    name: "Annette",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/519_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Gi\xF3 nh\u1EB9: Annette nh\u1EADn m\u1ED9t \u0111i\u1EC3m c\u1ED9ng d\u1ED3n Gi\xF3 nh\u1EB9 m\u1ED7i khi t\u01B0\u1EDBng xung quanh tung chi\xEAu, t\u1ED1i \u0111a 15 \u0111i\u1EC3m  Khi \u0111\xE3 \u0111\u1EE7 15 \u0111i\u1EC3m, n\u1EBFu b\u1EA3n th\xE2n Annette ho\u1EB7c m\u1ED9t t\u01B0\u1EDBng \u0111\u1ED3ng minh l\xE2n c\u1EADn c\xF2n d\u01B0\u1EDBi 70% m\xE1u, t\u1EA5t c\u1EA3 \u0111i\u1EC3m c\u1ED9ng d\u1ED3n s\u1EBD chuy\u1EC3n th\xE0nh hi\u1EC7u \u1EE9ng h\u1ED3i m\xE1u cho m\u1ECDi t\u01B0\u1EDBng \u0111\u1ED3ng minh xung quanh.",
      s1: "Gi\xF3 xo\xE1y: Annette t\u1EA1o ra m\u1ED9t c\u01A1n gi\xF3 l\u1ED1c g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i 0.25 gi\xE2y t\u1EA1i \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh. M\u1ED7i \u0111\u1EE3t t\u0103ng 33% s\xE1t th\u01B0\u01A1ng, k\xE9o d\xE0i trong 2 gi\xE2y. Nh\u1EEFng k\u1EBB \u0111\u1ECBch t\u1EA1i v\xF9ng t\xE2m c\u01A1n gi\xF3 s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm 2% m\xE1u t\u1ED1i \u0111a th\xE0nh s\xE1t th\u01B0\u01A1ng ph\xE9p, \u0111\u1ED3ng th\u1EDDi b\u1ECB l\xE0m ch\u1EADm 50% t\u1ED1c ch\u1EA1y trong 0.25 gi\xE2y",
      s2: "Gi\xF3 n\u1ED3m: K\xEDch ho\u1EA1t: Annette b\u1EAFn m\u1ED9t qu\u1EA3 c\u1EA7u gi\xF3 theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 l\xE0m ch\u1EADm 50% t\u1ED1c ch\u1EA1y c\u1EE7a c\xE1c \u0111\u01A1n v\u1ECB tr\xFAng chi\xEAu. Qu\u1EA3 c\u1EA7u gi\xF3 bay xuy\xEAn qua n\u1EA1n nh\xE2n \u0111\u1EA7u ti\xEAn, n\u1EBFu tr\xFAng ph\u1EA3i n\u1EA1n nh\xE2n th\u1EE9 hai s\u1EBD gom c\u1EA3 hai l\u1EA1i, g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 l\xE0m cho\xE1ng tr\xFAng 1 gi\xE2y.N\u1ED9i t\u1EA1i: N\u1EBFu Annette b\u1ECB cho\xE1ng s\u1EBD l\u1EADp t\u1EE9c ho\xE0n l\u1EA1i th\u1EDDi gian h\u1ED3i chi\xEAu n\xE0y, \u0111\u1ED3ng th\u1EDDi gi\xFAp t\u1EA1o l\xE1 ch\u1EAFn v\xE0 t\u0103ng gi\xE1p c\xF9ng gi\xE1p ph\xE9p trong 2 gi\xE2y; 45 gi\xE2y h\u1ED3i chi\xEAu.",
      s3: "M\u1EAFt b\xE3o: Annette bay \u0111\u1EBFn \u0111\u1ECBa \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh t\u1EA1o ra m\u1ED9t c\u01A1n b\xE3o h\u1EA5t v\u0103ng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, \u0111\u1ED3ng th\u1EDDi t\u1EA1o th\xE0nh m\u1ED9t b\u1EE9c t\u01B0\u1EDDng gi\xF3 ng\u0103n k\u1EBB \u0111\u1ECBch v\u01B0\u1EE3t qua trong 3.5 gi\xE2y. C\xE1c t\u01B0\u1EDBng \u0111\u1ED3ng minh b\xEAn trong b\u1EE9c t\u01B0\u1EDDng gi\xF3 \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 t\u1ED1c \u0111\xE1nh. Khi tung chi\xEAu n\xE0y Annette s\u1EBD \u0111\u01B0\u1EE3c ho\xE1 gi\u1EA3i m\u1ECDi tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF hi\u1EC7n t\u1EA1i \u0111ang ph\u1EA3i g\xE1nh ch\u1ECBu."
    },
    meta_data: {
      win_rate: 52.88,
      pick_rate: 12.49,
      ban_rate: 12.66
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_536",
    name: "Aoi",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/536_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Long L\u1EF1c: Sau m\u1ED7i l\u1EA7n tung chi\xEAu, Aoi s\u1EBD t\xEDch l\u0169y 1 l\u1EA7n Long l\u1EF1c (t\u1ED1i \u0111a 4 l\u1EA7n) \u0111\u1ED3ng th\u1EDDi c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF th\xE0nh \u0111\u1ED9t k\xEDch khi\u1EBFn \u0111\xF2n n\xE0y \u0111\u01B0\u1EE3c t\u0103ng t\u1EA7m \u0111\xE1nh v\xE0 t\u1ED1c \u0111\xE1nh - g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn m\u1EE5c ti\xEAu.  \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDBng th\u1EE9 4 nh\u1EA5t \u0111\u1ECBnh s\u1EBD g\xE2y ch\xED m\u1EA1ng v\xE0 khi\u1EBFn b\u1EA3n th\xE2n gi\u1EA3m h\u1ED3i chi\xEAu.",
      s1: "Long Tr\u1EA3m: Aoi tung tr\u1EA3o \u0111\u1ED9t k\xEDch v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi. \u0110\xE1nh tr\xFAng \u0111\u1ECBch gi\xFAp b\u1EA3n th\xE2n \u0111\u01B0\u1EE3c h\u1ED3i m\xE1u.  Tr\u1EA1ng th\xE1i phi h\xE0nh: Aoi b\u1ED5 nh\xE0o xu\u1ED1ng v\u1ECB tr\xED ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t tung t\u1EA5t c\u1EA3 c\xE1c m\u1EE5c ti\xEAu trong ph\u1EA1m vi. \u0110\xE1nh tr\xFAng k\u1EBB \u0111\u1ECBch gi\xFAp b\u1EA3n th\xE2n nh\u1EADn l\xE1 ch\u1EAFn.",
      s2: "Long Tr\u1EA3o: Aoi ph\xF3ng tr\u1EA3o v\xE0o ch\u01B0\u1EDBng ng\u1EA1i v\u1EADt, d\xF9ng n\xFAt di chuy\u1EC3n ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i Xung k\xEDch ho\u1EB7c Phi h\xE0nh.\xA0C\xF3 th\u1EC3 d\u1EF1 b\u1ECB 2 l\u1EA7n (ch\u1ECBu \u1EA3nh h\u01B0\u1EDFng h\u1ED3i chi\xEAu); Khi xung k\xEDch v\xE0 phi h\xE0nh, b\u1EA3n th\xE2n Aoi \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng.",
      s3: "Long Di\u1EC7t: Aoi bay l\xEAn tr\u1EDDi (kh\xF4ng b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu), c\u1EAFm long tr\u1EA3o v\xE0o k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD d\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm. Sau \u0111\xF3 trong tho\xE1ng ch\u1ED1c, Aoi l\u01B0\u1EDBt v\u1EC1 ph\xEDa sau \u0111\u1ED3ng th\u1EDDi thu h\u1ED3i song tr\u1EA3o v\xE0 g\xE2y m\xE1u m\u1EE5c ti\xEAu \u0111\xE3 m\u1EA5t th\xE0nh s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn ph\u1EA1m vi l\u1EDBn."
    },
    meta_data: {
      win_rate: 47.1,
      pick_rate: 2.46,
      ban_rate: 0.09
    },
    counters: [
      "Enzo",
      "Wukong",
      "Bright"
    ]
  },
  {
    id: "hero_126",
    name: "Arduin",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/126_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "H\u1ED3n huy\u1EBFt: N\u1ED9i t\u1EA1i: Khi m\xE1u c\u1EE7a Arduin c\xF2n xu\u1ED1ng th\u1EA5p v\xE0 \u0111ang trong tr\u1EA1ng th\xE1i giao tranh, h\u1EAFn s\u1EBD ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i H\u1ED3n huy\u1EBFt trong 1 th\u1EDDi gian. Su\u1ED1t th\u1EDDi gian n\xE0y, Arduin \u0111\u01B0\u1EE3c h\u1ED3i m\xE1u d\u1EF1a theo m\xE1u t\u1ED1i \u0111a m\u1ED7i khi \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng ho\u1EB7c chi\xEAu th\u1EE9c c\u1EE7a h\u1EAFn g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn k\u1EBB \u0111\u1ECBch.",
      s1: "H\u1ED3n tr\u1EA3m: Arduin vung r\xECu ch\xE9m ra m\u1ED9t v\xF2ng cung n\u0103ng l\u01B0\u1EE3ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n tr\xFAng chi\xEAu \u0111i. N\u1EBFu c\xF3 t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu, Arduin c\xF3 th\u1EC3 ti\u1EBFp t\u1EE5c n\u1EC7n r\xECu xu\u1ED1ng \u0111\u1EA5t g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t v\u0103ng k\u1EBB \u0111\u1ECBch l\xEAn kh\xF4ng trung.",
      s2: "H\u1ED3n gi\xE1p: Arduin t\u1EA1o ra m\u1ED9t l\xE1 ch\u1EAFn theo m\xE1u t\u1ED1i \u0111a. Ngay khi k\xEDch ho\u1EA1t l\xE1 ch\u1EAFn g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn. Trong 1 th\u1EDDi gian sau khi t\u1EA1o l\xE1 ch\u1EAFn, 3 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF c\u1EE7a Arduin g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n, \u0111\u1ED3ng th\u1EDDi m\u1ED7i \u0111\xF2n tr\xFAng \u0111\xEDch gi\u1EA3m th\u1EDDi gian h\u1ED3i c\u1EE7a C\xE2u h\u1ED3n R\xECu \u0111i 1 gi\xE2y.",
      s3: 'C\xE2u h\u1ED3n r\xECu: "Arduin ph\xF3ng r\xECu l\xEAn ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD di\u1EC7n r\u1ED9ng v\xE0 l\xE0m cho\xE1ng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu \u0111\u1EA7u ti\xEAn. Sau \u0111\xF3, h\u1EAFn ph\xF3ng \u0111\u1EBFn v\u1ECB tr\xED chi\u1EBFc r\xECu, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn c\xE1c k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn.Khi C\xE2u h\u1ED3n r\xECu \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t, c\xE1c tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF s\u1EBD kh\xF4ng th\u1EC3 c\u1EA3n Arduin ho\xE0n t\u1EA5t chi\xEAu."'
    },
    meta_data: {
      win_rate: 49.18,
      pick_rate: 4.76,
      ban_rate: 0.02
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_166",
    name: "Arthur",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/166_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Uy d\u0169ng: N\u1ED9i t\u1EA1i: Arthur \u0111\u01B0\u1EE3c th\u1EA7n th\xE1nh h\u1ED9 m\u1EC7nh, gi\xFAp b\u1EA3n th\xE2n s\u1EDF h\u1EEFu kh\u1EA3 n\u0103ng t\u1EF1 h\u1ED3i m\xE1u m\u1ED7i gi\xE2y d\u1EF1a tr\xEAn m\xE1u t\u1ED1i \u0111a.",
      s1: 'G\u01B0\u01A1m ch\xEDnh ngh\u0129a: "Arthur t\u0103ng 30% t\u1ED1c ch\u1EA1y, khi\u1EBFn \u0111\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp \xE1p s\xE1t k\u1EBB \u0111\u1ECBch, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m c\xE2m l\u1EB7ng m\u1EE5c ti\xEAu, \u0111\u1ED3ng th\u1EDDi k\u1EBFt th\xFAc t\u0103ng t\u1ED1c ch\u1EA1y c\u1EE7a Arthur.Ch\u01B0a h\u1EBFt, n\u1EA1n nh\xE2n tr\xFAng ph\u1EA3i k\u1EF9 n\u0103ng n\xE0y s\u1EBD b\u1ECB th\u1EA7n linh tr\u1EEBng ph\u1EA1t, khi\u1EBFn m\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 chi\xEAu th\u1EE9c c\u1EE7a Arthur l\xEAn h\u1EAFn g\xE2y th\xEAm 1% m\xE1u t\u1ED1i \u0111a c\u1EE7a n\u1EA1n nh\xE2n th\xE0nh s\xE1t th\u01B0\u01A1ng ph\xE9p."',
      s2: "Th\u1EA7n v\u1EADt h\u1ED9 th\xE2n: Arthur tri\u1EC7u h\u1ED3i g\u01B0\u01A1m v\xE0 khi\xEAn, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i 0.5 gi\xE2y l\xEAn \u0111\u1ECBch th\u1EE7 xung quanh. \u0110\u1ED3ng th\u1EDDi, Arthur nh\u1EADn l\xE1 ch\u1EAFn s\xE1t th\u01B0\u01A1ng d\u1EF1a tr\xEAn m\xE1u t\u1ED1i \u0111a c\u1EE7a b\u1EA3n th\xE2n.",
      s3: 'C\xF4ng l\xFD ph\xE1n quy\u1EBFt: "Arthur gi\u01A1 cao thanh ki\u1EBFm c\u1EE7a ch\xEDnh ngh\u0129a, nh\u1EA3y\xA0v\u1EC1 m\u1EE5c ti\xEAu t\u1EA1o ra s\xE1t th\u01B0\u01A1ng ph\xE9p d\u1EF1a tr\xEAn m\xE1u t\u1ED1i \u0111a c\u1EE7a b\u1EA3n th\xE2n l\xEAn m\u1EE5c ti\xEAu v\xE0 g\xE2y hi\u1EC7u \u1EE9ng h\u1EA5t tung cho t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch trong khu v\u1EF1c.Uy l\u1EF1c c\xF2n l\u1EA1i c\u1EE7a thanh ki\u1EBFm ch\xEDnh ngh\u0129a s\u1EBD t\u1EA1o ra s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i gi\xE2y l\xEAn k\u1EBB tr\xFAng ph\u1EA3i, k\xE9o d\xE0i 5 gi\xE2y."'
    },
    meta_data: {
      win_rate: 48.16,
      pick_rate: 11.03,
      ban_rate: 0.08
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_187",
    name: "Arum",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/187_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Linh th\xFA: N\u1ED9i t\u1EA1i:\xA0Arum tri\u1EC7u h\u1ED3i linh th\xFA v\u1EDDn quanh b\u1EA3n th\xE2n, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, \u0111\u1ED3ng th\u1EDDi gi\xFAp Arum h\u1ED3i m\xE1u. N\u1EBFu n\u1EA1n nh\xE2n tr\xFAng \u0111\xF2n kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng \u0111\u1ECBch, Arum s\u1EBD ch\u1EC9 \u0111\u01B0\u1EE3c h\u1ED3i \xEDt m\xE1u h\u01A1n.",
      s1: "Th\xFA k\xEDch: Arum ph\xF3ng n\u0103ng l\u01B0\u1EE3ng lan t\u1ECFa ra xung quanh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, \u0111\u1ED3ng th\u1EDDi tri\u1EC7u h\u1ED3i 1 linh th\xFA v\u1EDDn quanh b\u1EA3n th\xE2n. Tung chi\xEAu tr\xFAng k\u1EBB\xA0\u0111\u1ECBch gi\xFAp gi\u1EA3m th\u1EDDi gian h\u1ED3i 50%. S\u1ED1 l\u01B0\u1EE3ng linh th\xFA quy\u1EBFt \u0111\u1ECBnh hi\u1EC7u l\u1EF1c c\u1EE7a Th\xFA s\u1ED5ng; t\u1ED1i \u0111a t\u1ED3n t\u1EA1i 3 linh th\xFA.",
      s2: "Th\xFA s\u1ED5ng: Arum l\u1EC7nh cho linh th\xFA t\u1EA5n c\xF4ng v\xF9ng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, \u0111\u1ED3ng th\u1EDDi gi\xFAp b\u1EA3n th\xE2n t\u0103ng t\u1ED1c ch\u1EA1y trong tho\xE1ng ch\u1ED1c. Sau khi t\u1EA5n c\xF4ng linh th\xFA s\u1EBD bi\u1EBFn m\u1EA5t kh\u1ECFi Arum. S\u1ED1 l\u01B0\u1EE3ng linh th\xFA quy\u1EBFt \u0111\u1ECBnh s\u1ED1 l\u1EA7n v\xE0 hi\u1EC7u qu\u1EA3 c\xF4ng k\xEDch:\xA0linh th\xFA \u0111\u1EA7u ti\xEAn l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y trong 1 gi\xE2y, linh th\xFA th\u1EE9 hai l\xE0m ch\u1EADm m\u1EA1nh t\u1ED1c ch\u1EA1y trong 1 gi\xE2y, linh th\xFA th\u1EE9 ba g\xE2y cho\xE1ng 1 gi\xE2y.",
      s3: "Th\xFA kh\u1ED1n: Arum l\u01B0\u1EDBt \u0111\u1EBFn tr\xF3i bu\u1ED9c m\u1EE5c ti\xEAu trong th\u1EDDi gian ng\u1EAFn, \u0111\u1ED3ng th\u1EDDi l\u1EADp t\u1EE9c tri\u1EC7u h\u1ED3i 3 linh th\xFA v\u1EDDn quanh b\u1EA3n th\xE2n. Su\u1ED1t th\u1EDDi gian n\xE0y c\u1EA3 Arum l\u1EABn n\u1EA1n nh\xE2n \u0111\u1EC1u b\u1EA5t \u0111\u1ED9ng ho\xE0n to\xE0n d\u01B0\u1EDBi t\xE1c \u0111\u1ED9ng c\u1EE7a m\u1ED1i li\xEAn k\u1EBFt kh\xF4ng th\u1EC3 b\u1ECB ph\xE1 v\u1EE1, \u0111\u1EB7c bi\u1EC7t m\u1ECDi s\xE1t th\u01B0\u01A1ng b\u1EA5t k\u1EF3 ai trong c\u1EA3 hai g\xE1nh ch\u1ECBu \u0111\u1EC1u s\u1EBD \u0111\u01B0\u1EE3c truy\u1EC1n \u0111\u1EBFn ng\u01B0\u1EDDi c\xF2n l\u1EA1i."
    },
    meta_data: {
      win_rate: 50.48,
      pick_rate: 5.57,
      ban_rate: 7.52
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_502",
    name: "Astrid",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/502_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ki\u1EBFm T\xE2m: N\u1ED9i t\u1EA1i: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch (tr\u1EEB \u0110\u1ED9t k\xEDch) s\u1EBD gi\xFAp Astrid gi\u1EA3m h\u1ED3i chi\xEAu cho Chi\xEAu 1 v\xE0 Chi\xEAu 2 (gi\u1EA3m n\u1EEDa hi\u1EC7u qu\u1EA3 khi m\u1EE5c ti\xEAu l\xE0 qu\xE1i r\u1EEBng).",
      s1: "B\u1EA1t Ki\u1EBFm: Astrid vung thanh ki\u1EBFm c\u1EF1c \u0111\u1EA1i g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn. M\u1ED7i k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu gi\xFAp Astrid nh\u1EADn c\u1ED9ng d\u1ED3n t\u1ED1c \u0111\xE1nh v\xE0 t\u1ED1c ch\u1EA1y, t\u1ED1i \u0111a 3 c\u1ED9ng d\u1ED3n.",
      s2: "Qu\u1EA3 C\u1EA3m: Astrid l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, khi\u1EBFn \u0111\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp tr\u1EDF th\xE0nh \u0110\u1ED9t k\xEDch, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu. \u0110\u1ED3ng th\u1EDDi, Astrid nh\u1EADn \u0111\u01B0\u1EE3c l\xE1 ch\u1EAFn s\xE1t th\u01B0\u01A1ng.",
      s3: "C\u1EF1 Ki\u1EBFm: Astrid t\u1EADp trung s\u1EE9c m\u1EA1nh trong 2 gi\xE2y gi\xFAp mi\u1EC5n nhi\u1EC5m m\u1ECDi s\xE1t th\u01B0\u01A1ng v\xE0 kh\u1ED1ng ch\u1EBF. Sau \u0111\xF3, c\xF4 vung ki\u1EBFm g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n (t\u1ED1i \u0111a 1000 v\u1EDBi qu\xE1i v\xE0 l\xEDnh) v\xE0 l\xE0m cho\xE1ng t\u1EA5t c\u1EA3 n\u1EA1n nh\xE2n tr\xFAng ph\u1EA3i. S\xE1t th\u01B0\u01A1ng chu\u1EA9n tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD k\xE8m h\xFAt m\xE1u."
    },
    meta_data: {
      win_rate: 52.25,
      pick_rate: 0.87,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_511",
    name: "Ata",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/511_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Bi\u1EC3n s\xE2u ch\xFAc ph\xFAc: Ata khi m\u1EA5t m\xE1u s\u1EBD k\xEDch ho\u1EA1t thanh m\xE1u \u1EA3o. Trong th\u1EDDi gian m\xE1u \u1EA3o c\xF2n t\u1ED3n t\u1EA1i, h\u1EAFn s\u1EBD h\u1ED3i l\u1EA1i ph\u1EA7n m\xE1u \u1EA3o \u0111\xF3 d\u1EF1a tr\xEAn s\xE1t th\u01B0\u01A1ng g\xE2y ra.",
      s1: "\u0110\u1EA1p s\xF3ng: Ata tung ng\u01B0\u1EDDi l\xEAn r\u1ED3i r\u01A1i xu\u1ED1ng v\u1ECB tr\xED ch\u1EC9 \u0111\u1ECBnh l\u1EA7n 1 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. K\u1EBF \u0111\xF3 h\u1EAFn nh\u1EA3y th\xEAm m\u1ED9t l\u1EA7n n\u1EEFa g\xE2y s\xE1t th\u01B0\u01A1ng t\u01B0\u01A1ng t\u1EF1 v\xE0 l\xE0m cho\xE1ng \u0111\u1ECBch. Trong th\u1EDDi gian n\xE0y Ata s\u1EBD mi\u1EC5n kh\u1ED1ng ch\u1EBF.",
      s2: "B\xE1 v\u01B0\u01A1ng tr\u1EA3o: Ata vung m\u1ECF neo x\u01B0\u01A1ng c\xE1 v\xE0o k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 l\xE0m ch\u1EADm \u0111\u1ECBch, \u0111\u1ED3ng th\u1EDDi k\xE9o ch\xFAng m\u1ED9t \u0111o\u1EA1n ng\u1EAFn. N\u1EBFu m\u1ECF neo \u0111\xE2m tr\xFAng \u0111\u1ECBa h\xECnh, Ata s\u1EBD l\u01B0\u1EDBt t\u1EDBi \u0111\u1ECBa h\xECnh v\xE0 l\xF4i theo to\xE0n b\u1ED9 nh\u1EEFng k\u1EBB tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m cho\xE1ng \u0111\u1ECBch.",
      s3: "Thuy\u1EC1n b\u1EA1ch tu\u1ED9c: Ata tri\u1EC7u h\u1ED3i ra con thuy\u1EC1n kh\u1ED5ng l\u1ED3 trong 4 gi\xE2y khi\u1EBFn c\xE1c t\u01B0\u1EDBng hai phe kh\xF4ng th\u1EC3 v\u01B0\u1EE3t qua v\xE0 l\u1EADp t\u1EE9c g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\u01B0\u1EDBc m\u1EB7t. Khi tung chi\xEAu Ata s\u1EBD mi\u1EC5n kh\u1ED1ng ch\u1EBF, v\xE0 k\xEDch ho\u1EA1t l\u1EA7n n\u1EEFa s\u1EBD hu\u1EF7 chi\xEAu."
    },
    meta_data: {
      win_rate: 47.28,
      pick_rate: 1.02,
      ban_rate: 0.01
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_543",
    name: "Aya",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/543_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Linh h\u1ED3n s\xF3c nh\u1ECF: D\u01B0\u1EDBi 40% m\xE1u, Aya bi\u1EBFn th\xE0nh s\xF3c nh\u1ECF trong 5 gi\xE2y, kh\xF4ng b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu v\xE0 nh\u1EADn b\u1ED9 chi\xEAu th\u1EE9c m\u1EDBi.",
      s1: "N\u1ED1t nh\u1EA1c \xE1nh s\xE1ng: B\u1EAFn ra quang c\u1EA7u g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m ch\u1EADm k\u1EBB \u0111\u1ECBch \u0111\u1ED3ng th\u1EDDi khi\u1EBFn \u0111\u1ECBch l\u1ED9 di\u1EC7n",
      s2: "R\u1EEBng s\xE2u b\u1EA3o h\u1ED9: Aya bay \u0111\u1EBFn bi\u1EBFn th\xE0nh l\u1EDBp gi\xE1p \u1EA3o b\u1EA3o v\u1EC7 \u0111\u1ED3ng \u0111\u1ED9i ch\u1EC9 \u0111\u1ECBnh. N\u1EBFu \u0111\xE3 trong tr\u1EA1ng th\xE1i gi\xE1p \u1EA3o, Aya l\u1EADp t\u1EE9c t\u1EA1o th\xEAm l\xE1 ch\u1EAFn cho \u0111\u1ED3ng \u0111\u1ED9i. K\xE9o chi\xEAu \u0111\u1EC3 nh\u1EA3y ra kh\u1ECFi \u0111\u1ED3ng \u0111\u1ED9i.",
      s3: "Kh\xFAc nh\u1EA1c r\u1EEBng s\xE2u: T\u1EA1o ph\xE1p tr\u1EADn quanh \u0111\u1ED3ng \u0111\u1ED9i c\xF3 l\xE1 ch\u1EAFn linh h\u1ED3n gi\xFAp \u0111\u1ED3ng \u0111\u1ED9i t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn \u0111\u1ECBch trong ph\u1EA1m vi khi\u1EBFn \u0111\u1ECBch b\u1ECB bi\u1EBFn h\xECnh"
    },
    meta_data: {
      win_rate: 48.72,
      pick_rate: 15.47,
      ban_rate: 21.46
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_127",
    name: "Azzen'Ka",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/301270head_B51.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Sa m\u1EA1c th\u1EA7n l\u1EF1c: N\u1ED9i t\u1EA1i: C\xE1c m\u1EE5c ti\xEAu b\u1ECB t\u01B0\u1EDBng \u0111\xE1nh th\u01B0\u1EDDng ho\u1EB7c tr\xFAng chi\xEAu s\u1EBD b\u1ECB ng\xE2m t\u1EA9m b\u1EDFi Sa m\u1EA1c h\xF3a, ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p",
      s1: "Nghi th\u1EE9c Sa Ng\u01B0ng: Azzen'Ka t\u1EA1o nghi th\u1EE9c Sa Ng\u01B0ng g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 h\u1EA5t tung k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi ch\u1EC9 \u0111\u1ECBnh \u0111\u1ED3ng th\u1EDDi li\xEAn t\u1EE5c l\xE0m ch\u1EADm ch\xFAng.Khi b\u1EA3n th\xE2n \u1EDF trong ph\u1EA1m vi n\xE0y, Azzen'ka s\u1EBD \u0111\u01B0\u1EE3c v\xF4 \u0111\u1ECBch trong 3 gi\xE2y",
      s2: "Th\u1EA7n sa lu\xE2n chuy\u1EC3n: Azzen'Ka tung Th\u1EA7n Sa v\xE0o m\u1EE5c ti\xEAu ch\u1EC9 \u0111\u1ECBnh khi\u1EBFn n\xF3 n\u1EA3y gi\u1EEFa c\xE1c k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p",
      s3: "Th\u1EA7n ph\u1EA1t v\u0129nh h\u1EB1ng: Azzen'Ka tung Th\u1EA7n tr\u1EA3o tr\u1EEBng ph\u1EA1t theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh \u0111\u1EA9y l\xF9i k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng \u0111i v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Khi chi\xEAu th\u1EE9c k\u1EBFt th\xFAc t\u1EA1i \u0111i\u1EC3m cu\u1ED1i, n\xF3 s\u1EBD t\u1EA1o th\xE0nh m\u1ED9t v\xF9ng c\xE1t l\xFAn sa l\u1EA7y g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p cho k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng."
    },
    meta_data: {
      win_rate: 56.96,
      pick_rate: 13.92,
      ban_rate: 2.07
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_505",
    name: "Baldum",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/505_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "C\u01B0\u1EDDng tr\xE1ng: Baldum m\u1EB7c \u0111\u1ECBnh t\u0103ng th\xEAm 18% gi\xE1p  M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Baldum g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p",
      s1: "V\u1EADt t\u1ED5 v\u1ED7 t\u1EA5t: Baldum lao theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t tung l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu d\u1ECDc \u0111\u01B0\u1EDDng; khi t\xF4ng ph\u1EA3i t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD d\u1EEBng l\u1EA1i r\u1ED3i m\xFAa v\u0169 kh\xED h\u1EA5t k\u1EBB \u0111\u1ECBch ra sau, g\xE2y th\xEAm 8% m\xE1u t\u1ED1i \u0111a c\u1EE7a m\u1EE5c ti\xEAu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y trong 1 gi\xE2y.",
      s2: "\u0110\u1ECBa ch\u1EA5n: Baldum d\u1EADm m\u1EA1nh l\xEAn m\u1EB7t \u0111\u1EA5t t\u1EA1o s\xF3ng ch\u1EA5n \u0111\u1ED9ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, t\u1ED5ng c\u1ED9ng 6 l\u1EA7n l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y t\u1EEB c\xE1c m\u1EE5c ti\xEAu, ngo\xE0i ra hi\u1EC7u \u1EE9ng c\xF2n khi\u1EBFn c\xE1c s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD t\u1EEB nh\u1EEFng n\u1EA1n nh\xE2n n\xE0y l\xEAn Baldum b\u1ECB gi\u1EA3m trong 1 gi\xE2y. M\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu gi\u1EA3m 0.3 gi\xE2y h\u1ED3i chi\xEAu th\u1EE9c n\xE0y",
      s3: "\u0110\u1ECBa giam: Sau 0.5 gi\xE2y, Baldum t\u1EA1o ra m\u1ED9t v\xF9ngl\xE0m gi\u1EA3m t\u1ED1c \u0111\u1ED9 di chuy\u1EC3n trong 0.6 gi\xE2y tr\u01B0\u1EDBc khi m\u1EB7t \u0111\u1EA5t s\u1EE5p \u0111\u1ED5 v\xE0\xA0giam gi\u1EEF k\u1EBB \u0111\u1ECBch trong 3 gi\xE2y, su\u1ED1t th\u1EDDi gian n\xE0y n\u1EA1n nh\xE2n kh\xF4ng th\u1EC3 th\u1EF1c hi\u1EC7n b\u1EA5t c\u1EE9 h\xE0nh \u0111\u1ED9ng n\xE0o v\xE0 kh\xF4ng th\u1EC3 b\u1ECB ch\u1ECDn. Khi h\u1EBFt th\u1EDDi gian giam gi\u1EEF, n\u1EA1n nh\xE2n s\u1EBD ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 gi\u1EA3m t\u1ED1c ch\u1EA1y trong 1.5 gi\xE2y."
    },
    meta_data: {
      win_rate: 47.96,
      pick_rate: 1.57,
      ban_rate: 0.02
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_548",
    name: "Bijan",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/541_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Sa m\u1EA1c th\u1EA7n l\u1EF1c: Sau m\u1ED7i \u0111o\u1EA1n th\u1EDDi gian, Bijan c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n. Khi nh\u1EADn s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD ho\u1EB7c s\xE1t th\u01B0\u01A1ng chu\u1EA9n ho\u1EB7c tung chi\xEAu tr\xFAng m\u1EE5c ti\xEAu, Bijan s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng th\xEAm gi\xE1p",
      s1: "Sa m\u1EA1c m\xE3nh k\xEDch: L\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc vung ch\xF9y b\u1ED5 xu\u1ED1ng m\u1EE5c ti\xEAu, g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 t\u1EA1o ph\xE1p tr\u1EADn h\u1EA5t tung m\u1EE5c ti\xEAu",
      s2: "Sa m\u1EA1c th\u1EA7n \xE2m: L\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 l\xE0m ch\u1EADm m\u1EE5c ti\xEAu, \u0111\u1ED3ng th\u1EDDi \u0111\u01B0\u1EE3c tung chi\xEAu qu\xE9t ngang 3 l\u1EA7n.",
      s3: "Sa m\u1EA1c th\u1EA7n th\xFA: G\u1ECDi ra th\u1EA7n \u0111\u1ECBa sa th\xFA \u0111\u1EC3 \u0111i\u1EC1u khi\u1EC3n theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, nh\u1EADn mi\u1EC5n kh\u1ED1ng. Khi tr\xFAng \u0111\u1ECBa h\xECnh, t\u01B0\u1EDBng \u0111\u1ECBch ho\u1EB7c t\xE0i k\xEDch ho\u1EA1t chi\xEAu n\xE0y, Bijan s\u1EBD d\u1EEBng l\u1EA1i, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, h\u1EA5t tung \u0111\u1ECBch \u0111\u1ED3ng th\u1EDDi gi\u1EA3m gi\xE1p c\u1EE7a ch\xFAng. Bijan c\xF3 th\u1EC3 ch\u1EDF 1 \u0111\u1ED3ng \u0111\u1ED9i khi d\xF9ng chi\xEAu n\xE0y."
    },
    meta_data: {
      win_rate: 48.34,
      pick_rate: 7.46,
      ban_rate: 0.31
    },
    counters: [
      "Edras",
      "Maloch",
      "Veres"
    ]
  },
  {
    id: "hero_599",
    name: "Billow",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/305990head.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Cu\u1ED3ng th\xFA s\u0103n m\u1ED3i: Billow g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n l\xEAn nh\u1EEFng m\u1EE5c ti\xEAu m\xE1u th\u1EA5p",
      s1: "\u0110\u1ED9n th\u1EE7y ti\u1EC1m h\xE0nh: Billow l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 nh\u1EA3y xu\u1ED1ng n\u01B0\u1EDBc. Su\u1ED1t th\u1EDDi gian n\xE0y t\u01B0\u1EDBng nh\u1EADn \u0111\u01B0\u1EE3c hi\u1EC7u \u1EE9ng t\u0103ng t\u1ED1c ch\u1EA1y \u0111\u1ED3ng th\u1EDDi t\u0103ng th\xEAm t\u1ED1c ch\u1EA1y khi xung quanh c\xF3 m\u1EE5c ti\xEAu th\u1EA5p m\xE1u.Trong v\xF9ng s\xF4ng, tr\u1EA1ng th\xE1i H\u1EA3i qu\xE1i kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian.Tr\u1EA1ng th\xE1i H\u1EA3i qu\xE1i: L\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng.",
      s2: "Cu\u1ED3ng b\u1EA1o truy k\xEDch: Billow t\u1EA5n c\xF4ng m\u1EE5c ti\xEAu l\xE2n c\u1EADn g\xE2y s\xE1t th\u01B0\u01A1ng, khi tr\xFAng \u0111\xEDch s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c d\u1EA5u \u1EA5n v\xE0 c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\xF9ng h\u1ED3i m\xE1u. Ngo\xE0i ra c\xF2n s\u1EED d\u1EE5ng d\u1EA5u \u1EA5n \u0111\u1EC3 truy k\xEDch k\u1EBB \u0111\u1ECBch \u0111\u1ED3ng th\u1EDDi h\u1ED3i m\xE1u.Tr\u1EA1ng th\xE1i H\u1EA3i qu\xE1i: L\u01B0\u1EDBt v\u1EC1 h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng",
      s3: "N\u1ED9 h\u1EA3i sa ng\u01B0: Billow l\xE0m ch\u1EADm m\u1EE5c ti\xEAu r\u1ED3i l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc \u0111\u1EA9y l\xF9i k\u1EBB \u0111\u1ECBch \u0111\u1EBFn \u0111i\u1EC3m cu\u1ED1i \u0111\u1ED3ng th\u1EDDi g\xE2y s\xE1t th\u01B0\u01A1ng.Tr\u1EA1ng th\xE1i H\u1EA3i qu\xE1i: L\u1EADp t\u1EE9c l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 \u0111\u1EA9y l\xF9i n\u1EA1n nh\xE2n k\xE8m theo g\xE2y s\xE1t th\u01B0\u01A1ng"
    },
    meta_data: {
      win_rate: 51.57,
      pick_rate: 15.98,
      ban_rate: 2.41
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_597",
    name: "Biron",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://lienquan.garena.vn/wp-content/uploads/2024/10/biron-artwork-1.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Quy\u1EBFt chi\u1EBFn kh\xF4ng l\xF9i: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 chi\xEAu ch\u01B0a \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a c\u1EE7a Biron tr\xFAng \u0111\u1ECBch s\u1EBD n\u1EA1p n\u1ED9i n\u0103ng cho v\u0169 kh\xED c\u1EE7a m\xECnh. Khi t\xEDch l\u0169y >= 30 \u0111i\u1EC3m, m\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 \u0111\u01B0\u1EE3c h\u1ED3i  m\xE1u \u0111\u1ED3ng th\u1EDDi chi\xEAu th\u1EE9c s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c hi\u1EC7u \u1EE9ng c\u01B0\u1EDDng h\xF3a kh\xE1c nhau nh\u01B0ng kh\xF4ng th\u1EC3 nh\u1EADn n\u1ED9i n\u0103ng t\u1EEB vi\u1EC7c t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch v\xE0o khi n\xE0y.\u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 chi\xEAu th\u1EE9c tr\xFAng \u0111\xEDch gi\xFAp h\u1ED3i n\u1ED9i n\u0103ng, t\u1ED1i \u0111a c\xF3 th\u1EC3 d\u1EF1 tr\u1EEF 90 \u0111i\u1EC3m",
      s1: "\u0110i\u1EC7n ch\xF9y xu\u1EA5t k\xEDch: Biron vung v\u0169 kh\xED v\u1EC1 ph\xEDa tr\u01B0\u1EDBc, m\u1ED7i l\u1EA7n g\xE2ys\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n.C\u01B0\u1EDDng h\xF3a: T\u0103ng s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD g\xE2y ra v\xE0 t\u0103ng h\u1ED3i m\xE1uKhi g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn \u0111\u01A1n v\u1ECB kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng, hi\u1EC7u qu\u1EA3 h\u1ED3i m\xE1u gi\u1EA3m m\u1ED9t n\u1EEDa.",
      s2: "\u0110\u1ED9t k\xEDch v\u0169 b\xE3o: Biron x\xF4ng th\u1EB3ng v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng \u0111i. Khi k\u1EBFt th\xFAc s\u1EBD c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD c\xF9ng l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a k\u1EBB \u0111\u1ECBch.C\u01B0\u1EDDng h\xF3a: Khi s\u1EED d\u1EE5ng \u0111\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a n\u1EBFu n\u1ED9i n\u0103ng >30, Biron s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, h\u1EA5t tung v\xE0 l\xE0m cho\xE1ng k\u1EBB \u0111\u1ECBch b\u1ECB \u0111\xE1nh tr\xFAng \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng ti\u1EBFp 1 gi\xE2y ngay sau \u0111\xF3.N\u1EBFu n\u1ED9i n\u0103ng nhi\u1EC1u khi tung \u0111\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a s\u1EBD ti\xEAu hao n\u1ED9i n\u0103ng.",
      s3: "Tr\u1ECDng l\u1EF1c t\u1EEB tr\u01B0\u1EDDng: Biron \u0111\u1EADp v\u0169 kh\xED xu\u1ED1ng m\u1EB7t \u0111\u1EA5t, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a \u0111\u1ECBch \u0111\u1ED3ng th\u1EDDi t\u1EA1o l\xE1 ch\u1EAFn cho b\u1EA3n th\xE2n.C\u01B0\u1EDDng h\xF3a: T\u0103ng s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE1 ch\u1EAFn \u0111\u1ED3ng th\u1EDDi t\u1EA1o ra m\u1ED9t l\u01B0\u1EDBi \u0111i\u1EC7n, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD cho \u0111\u01A1n v\u1ECB \u0111\u1ECBch v\xE0 c\u01B0\u1EDBp \u0111o\u1EA1t t\u1ED1c ch\u1EA1y t\u1EEB m\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch cho b\u1EA3n th\xE2n BironPh\u1EA1m vi l\u01B0\u1EDBi \u0111i\u1EC7n s\u1EBD t\u0103ng l\xEAn theo m\u1ED7i c\u1EA5p chi\xEAu 3"
    },
    meta_data: {
      win_rate: 49.89,
      pick_rate: 5.9,
      ban_rate: 0.08
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_598",
    name: "Bolt Baron",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/305980head.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Thi\xEAn l\xF4i ch\u01B0\u1EDFng: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Bolt Baron g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Khi t\u1EA5n c\xF4ng \u1EDF kho\u1EA3ng c\xE1ch g\u1EA7n s\u1EBD k\xEDch ho\u1EA1t ch\u1EBF \u0111\u1ED9 c\u1EADn chi\u1EBFn gi\xFAp gi\u1EA3m th\u1EDDi gian gi\xE3n c\xE1ch gi\u1EEFa c\xE1c \u0111\xF2n \u0111\xE1nh.\u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng gi\xFAp Bolt Baron nh\u1EADn 1 \u0111i\u1EC3m Thi\xEAn l\xF4i, t\u1ED1i \u0111a c\u1ED9ng d\u1ED3n 6 l\u1EA7n. Khi \u0111\u1EA1t t\u1ED1i \u0111a s\u1EBD k\xEDch ho\u1EA1t Thi\xEAn l\xF4i v\xE0 gi\xFAp \xF4ng ta nh\u1EADn th\xEAm m\u1ED9t l\u1EA7n c\u01A1 h\u1ED9i tung chi\xEAu c\u01A1 b\u1EA3n.Sau khi tung chi\xEAu c\u01A1 b\u1EA3n Bolt Baron s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c \u0111\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi r\u1ED9ng v\xE0 h\u1ED3i ph\u1EE5c m\xE1u.\u0110\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a t\u1EEB xa g\xE2y 66% s\xE1t th\u01B0\u01A1ng l\xEAn c\xE1c \u0111\u01A1n v\u1ECB kh\xF4ng ph\u1EA3i m\u1EE5c ti\xEAu ch\xEDnh v\xE0 kh\xF4ng k\xEDch ho\u1EA1t hi\u1EC7u \u1EE9ng \u0111\xE1nh th\u01B0\u1EDDng.",
      s1: "Thi\xEAn l\xF4i b\u1ED9: Bolt Baron h\xF3a th\xE0nh s\u1EA5m s\xE9t l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch d\u1ECDc \u0111\u01B0\u1EDDng l\u01B0\u1EDBt \u0111\u1ED3ng th\u1EDDi nh\u1EADn l\xE1 ch\u1EAFn, k\xE9o d\xE0i 2 gi\xE2y.",
      s2: "Cu\u1ED3ng l\xF4i k\xEDch: Bolt Baron ph\xF3ng ra m\u1ED9t tia s\xE9t cu\u1ED3ng n\u1ED9 v\u1EC1 ph\xEDa tr\u01B0\u1EDBc. Khi \u0111\u1EA1t \u0111\u1EBFn t\u1EA7m b\u1EAFn t\u1ED1i \u0111a ho\u1EB7c ch\u1EA1m v\xE0o k\u1EBB \u0111\u1ECBch, tia s\xE9t s\u1EBD ph\xE1t n\u1ED5 sau tho\xE1ng ch\u1ED1c \u0111\u1EA9y l\xF9i \u0111\u1ECBch v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.K\u1EBB \u0111\u1ECBch c\xE0ng g\u1EA7n Bolt Baron th\xEC s\u1EBD b\u1ECB \u0111\u1EA9y l\xF9i c\xE0ng xa.",
      s3: "Ng\u1EA1o khung thi\xEAn: Bolt Baron bay l\xEAn tr\u1EDDi, h\xF3a th\xE2n th\xE0nh B\xE1 ch\u1EE7 Thi\xEAn l\xF4i.Qu\xE1 tr\xECnh bi\u1EBFn th\xE2n k\xE9o d\xE0i 1.5 gi\xE2y, su\u1ED1t th\u1EDDi gian n\xE0y Bolt Baron \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng v\xE0 t\u0103ng 30% t\u1ED1c ch\u1EA1y k\xE8m kh\xF4ng b\u1ECB t\u01B0\u1EDDng ng\u0103n c\u1EA3n \u0111\u1ED3ng th\u1EDDi t\u1EA1o ra 5 \u0111\u1EA1o s\u1EA5m s\xE9t l\u1EA7n l\u01B0\u1EE3t \u0111\xE1nh ng\u1EABu nhi\xEAn k\u1EBB \u0111\u1ECBch xung quanh (\u01B0u ti\xEAn t\u01B0\u1EDBng). M\u1ED7i c\xFA gi\u1EADt s\xE9t g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 gi\xFAp Bolt Baron nh\u1EADn \u0111\u01B0\u1EE3c 1 \u0111i\u1EC3m Thi\xEAn l\xF4i v\xE0 l\xE1 ch\u1EAFn, k\xE9o d\xE0i 1 gi\xE2y. Khi \u0111\xE1p \u0111\u1EA5t, Bolt Baron g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p cho k\u1EBB \u0111\u1ECBch xung quanh.Bi\u1EBFn th\xE2n k\xE9o d\xE0i 10 gi\xE2y, trong th\u1EDDi gian n\xE0y \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c 2 \u0111i\u1EC3m Thi\xEAn l\xF4i v\xE0 t\u1EA1o ra chu\u1ED7i s\xE9t n\u1EA3y gi\u1EEFa c\xE1c k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Ngo\xE0i ra \u0111\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a c\xF2n \u0111\u01B0\u1EE3c t\u0103ng ph\u1EA1m vi g\xE2y s\xE1t th\u01B0\u01A1ng."
    },
    meta_data: {
      win_rate: 48.08,
      pick_rate: 2.1,
      ban_rate: 0.06
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_541",
    name: "Bonnie",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/548_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Quy\u1EC1n n\u0103ng b\u1EA1o t\u1ED1c: Khi k\xEDch ho\u1EA1t hi\u1EC7u \u1EE9ng B\xE3o s\xE9t c\u1EE7a chi\xEAu 1 tr\xFAng \u0111\u1ECBch, Bonnie \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y.",
      s1: "Th\u1ECF v\xE0ng xu\u1EA5t k\xEDch: Bonnie n\xE9m th\u1ECF v\xE0ng \u0111\u1EBFn v\u1ECB tr\xED ch\u1ECB \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p cho \u0111\u1ECBch. Th\u1ECF v\xE0ng t\u1ED3n t\u1EA1i 1 kho\u1EA3ng th\u1EDDi gian nh\u1EA5t \u0111\u1ECBnh v\xE0 ph\xE1t ra s\xF3ng s\xE9t khi\u1EBFn \u0111\u1ECBch l\u1ED9 di\u1EC7n. S\xE1t th\u01B0\u01A1ng \u0111\u1EBFn t\u1EEB Th\u1ECF v\xE0ng s\u1EBD l\xE0m cho hi\u1EC7u \u1EE9ng B\xE3o s\xE9t c\u1EE7a chi\xEAu 1 \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t.",
      s2: "Th\u1ECF \u0111\u1ECF tr\xF3i ch\xE2n: Bonnie g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn \u0111\u1ECBch trong ph\u1EA1m vi ch\u1EC9 \u0111\u1ECBnh v\xE0 khi\u1EBFn \u0111\u1ECBch b\u1ECB tr\xF3i ch\xE2n.",
      s3: "Th\u1ECF t\xEDm g\u1EA7m th\xE9t: Bonnie tung th\u1ECF t\xEDm \u0111\u1EBFn v\u1ECB tr\xED ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi v\xE0 h\xFAt \u0111\u1ECBch v\u1EC1 trung t\xE2m. Sau \u0111\xF3, Th\u1ECF t\xEDm s\u1EBD n\u1ED5 g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 l\xE0m cho\xE1ng \u0111\u1ECBch."
    },
    meta_data: {
      win_rate: 50.18,
      pick_rate: 1.91,
      ban_rate: 0.03
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_540",
    name: "Bright",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/540_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Th\u1EA7n l\u1EF1c \xE1nh s\xE1ng: Bright s\u1EBD c\u0103n c\u1EE9 v\xE0o c\u1EF1 ly v\u1EDBi k\u1EBB \u0111\u1ECBch \u0111\u1EC3 t\u1EF1 \u0111\u1ED9ng quy\u1EBFt \u0111\u1ECBnh \u0111\xE1nh \xE1p s\xE1t hay b\u1EAFn xa. D\u01B0\u1EDBi tr\u1EA1ng th\xE1i b\u1EAFn xa, m\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD g\xE2y c\u1ED9ng d\u1ED3n 1 l\u1EA7ntrong 5 gi\xE2y, t\u1ED1i \u0111a c\u1ED9ng d\u1ED3n 5 l\u1EA7n. D\u01B0\u1EDBi tr\u1EA1ng th\xE1i c\u1EADn chi\u1EBFn, m\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 khi t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch mang theo, Bright s\u1EBD g\xE2y th\xEAm X s\u1ED1 l\u1EA7nth\xE0nh s\xE1t th\u01B0\u01A1ng chu\u1EA9n.",
      s1: "T\u1ED1c \u0111\u1ED9 quang minh: Bright b\u1EAFn ra m\u1ED9t lu\u1ED3ng \xE1nh s\xE1ng theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, c\u1ED9ng d\u1ED3n 1 t\u1EA7ngv\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi c\xF3 th\u1EC3 d\xF9ng n\xFAt di chuy\u1EC3n \u0111\u1EC3 bi\u1EBFn \u0111\u1EBFn v\u1ECB tr\u1ECB g\u1EA7n \u0111\xF3 v\xE0 ph\xF3ng ti\u1EBFp 1 thanh gi\xE1o \xE1nh s\xE1ng g\xE2y l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng nh\u01B0 tr\xEAn. B\u1EA5t c\u1EE9 thanh gi\xE1o n\xE0o ph\xF3ng tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch \u0111\u1EC1u s\u1EBD gi\xFAp b\u1EA3n th\xE2n Bright t\u0103ng t\u1ED1c ch\u1EA1y. Ngo\xE0i ra t\u01B0\u1EDBng \u0111\u1ECBch \u0111\u1ED3ng th\u1EDDi b\u1ECB tr\xFAng 2 l\u1EA7n s\xE1t th\u01B0\u01A1ng tr\xEAn s\u1EBD d\xEDnh th\xEAm 1 t\u1EA7ng, ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 b\u1ECB cho\xE1ng.N\u1ED9i t\u1EA1i: K\u1EBB \u0111\u1ECBch b\u1ECB \u0111\xE1nh tr\xFAng \u1EDF tr\xEAn s\u1EBD b\u1ECB \u0111\xE1nh d\u1EA5uv\xE0 Bright s\u1EBD nh\xECn th\u1EA5y k\u1EBB \u0111\u1ECBch v\u1EDBi t\u1EA7m nh\xECn chu\u1EA9n.",
      s2: "Quang minh ph\xE1n quy\u1EBFt: Bright vung \u0111ao \xE1nh s\xE1ng \u0111\u1ED9t k\xEDch v\xE0o k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi 3 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF c\u1EE7a b\u1EA3n th\xE2n \u0111\u01B0\u1EE3c t\u0103ng % t\u1ED1c \u0111\xE1nh, h\u1ED3i m\xE1u trong 3 gi\xE2y.N\u1ED9i t\u1EA1i 1: N\u1EBFu \u0111\xE1nh th\u01B0\u1EDDng c\u1EADn chi\u1EBFn v\xE0o k\u1EBB \u0111\u1ECBch b\u1ECB \u0111\xE1nh d\u1EA5u, Bright s\u1EBD x\xF3a h\u1EBFt d\u1EA5u \u1EA5n v\xE0 \u0111\u01B0\u1EE3c gi\u1EA3m n\u1EEDa th\u1EDDi gian h\u1ED3i chi\xEAu 2.N\u1ED9i t\u1EA1i 2: Bright h\u1EA1 t\u01B0\u1EDBng s\u1EBD l\u1EADp t\u1EE9c l\xE0m m\u1EDBi chi\xEAu 2.",
      s3: "Ma s\xFAng ph\xE1n quy\u1EBFt: Sau khi b\u1EADt B\u1EA5t t\u1EED th\xE1nh th\xE2n, t\u1EA5t c\u1EA3 s\xE1t th\u01B0\u01A1ng ph\u1EA3i ch\u1ECBu s\u1EBD b\u1ECB d\u1ECBch chuy\u1EC3n th\u1EDDi gian sau 3 gi\xE2y m\u1EDBi b\u1ED9c ph\xE1t (c\u1EA5m d\xF9ng chi\xEAu 1). N\u1EBFu Bright h\u1EA1 \u0111\u01B0\u1EE3c k\u1EBB g\xE2y s\xE1t th\u01B0\u01A1ng, b\u1EA3n th\xE2n s\u1EBD kh\xF4ng ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng \u0111\u1EBFn t\u1EEB k\u1EBB \u0111\u1ECBch \u0111\xF3. Chi\xEAu n\xE0y k\xE9o d\xE0i 6 gi\xE2y. M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng xa s\u1EBD mang t\xEDnh xuy\xEAn th\u1EA5u v\xE0 \u0111\xE1nh d\u1EA5ul\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi. M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EADn chi\u1EBFn s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng trong ph\u1EA1m vi v\xE0 g\xE2y Xchuy\u1EC3n th\xE0nh s\xE1t th\u01B0\u01A1ng chu\u1EA9n."
    },
    meta_data: {
      win_rate: 50.74,
      pick_rate: 3.76,
      ban_rate: 0.02
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_116",
    name: "Butterfly",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/116_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "S\xE1t Th\u1EE7: H\u1EA1 ho\u1EB7c ph\u1EE5 s\u1EBD l\xE0m m\u1EDBi to\xE0n b\u1ED9 th\u1EDDi gian h\u1ED3i chi\xEAu",
      s1: "Qu\xE9t Ki\u1EBFm: Butterfly qu\xE9t ki\u1EBFm, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD,\xA0xo\xE1 l\xE0m ch\u1EADm \u0111ang ph\u1EA3i g\xE1nh ch\u1ECBu, \u0111\u1ED3ng th\u1EDDi t\u0103ng t\u1ED1c ch\u1EA1y b\u1EA3n th\xE2n.",
      s2: "Phi Ki\u1EBFm: Butterfly ph\xF3ng ki\u1EBFm ch\u1EDBp nho\xE1ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng n\u1EA1n nh\xE2n tr\xFAng \u0111\xF2n theo \u0111\u01B0\u1EDDng th\u1EB3ng. \u0110\u1ED3ng th\u1EDDi, Butterfly \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh.",
      s3: "\xC1m S\xE1t: Butterfly xu\u1EA5t hi\u1EC7n ph\xEDa sau k\u1EBB \u0111\u1ECBch c\xF3 l\u01B0\u1EE3ng m\xE1u th\u1EA5p nh\u1EA5t (\u01B0u ti\xEAn t\u01B0\u1EDBng) v\xE0 \xE1m s\xE1t n\u1EA1n nh\xE2n, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. \u0110\u1ED3ng th\u1EDDi, Butterfly \u0111\u01B0\u1EE3c\xA0t\u0103ng mi\u1EC5n th\u01B0\u01A1ng trong v\xE0 m\u1EE5c ti\xEAu s\u1EBD b\u1ECB \u0111\xE1nh d\u1EA5u.\xA0Khi k\u1EBFt th\xFAc \u0111\xE1nh d\u1EA5u ho\u1EB7c m\u1EE5c ti\xEAu \u0111\xE3 ch\u1EBFt, m\u1ED9t ph\u1EA7n s\xE1t th\u01B0\u01A1ng m\xE0 m\u1EE5c ti\xEAu \u0111\xE3 ch\u1ECBu s\u1EBD chuy\u1EC3n th\xE0nh tr\u1ECB li\u1EC7u cho b\u1EA3n th\xE2n.Ba \u0111\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp s\u1EBD chuy\u1EC3n th\xE0nh lao t\u1EDBi k\u1EBB \u0111\u1ECBch (c\u1EF1 ly v\u1EEBa). N\u1EBFu nh\u01B0 \u0111\xF3 l\xE0 t\u01B0\u1EDBng th\xEC gi\u1EA3m th\xEAm 0.5 gi\xE2y h\u1ED3i chi\xEAu c\u1EE7a Qu\xE9t ki\u1EBFm."
    },
    meta_data: {
      win_rate: 47.41,
      pick_rate: 12.7,
      ban_rate: 0.19
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_524",
    name: "Capheny",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/524_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Ph\xE1o t\u1EF1 \u0111\u1ED9ng: N\u1ED9i t\u1EA1i: Kh\u1EA9u ph\xE1o t\u1EF1 \u0111\u1ED9ng si\xEAu t\u1ED1i t\xE2n "\u0110\u1EC7 t\u1EE9" cho ph\xE9p Capheny c\xF3 th\u1EC3 v\u1EEBa di chuy\u1EC3n v\u1EEBa t\u1EA5n c\xF4ng, ch\u01B0a h\u1EBFt n\xF3 c\xF2n s\u1EDF h\u1EEFu 2 c\u01A1 ch\u1EBF b\u1EAFn: "\u0110\u1EA1i li\xEAn" v\xE0 "\u0110\u1EA1i b\xE1c", b\xF9 l\u1EA1i Capheny g\xE2y gi\u1EA3m s\xE1t th\u01B0\u01A1ng l\xEAn qu\xE1i r\u1EEBng (t\u0103ng d\u1EA7n tr\u1EDF l\u1EA1i b\xECnh th\u01B0\u1EDDng theo c\u1EA5p t\u01B0\u1EDBng). Ngo\xE0i ra t\u1EA5t c\u1EA3 t\u1ED1c \u0111\xE1nh nh\u1EADn t\u1EEB trang b\u1ECB s\u1EBD \u0111\u01B0\u1EE3c chuy\u1EC3n h\xF3a sang c\xF4ng v\u1EADt l\xFD.',
      s1: "\u0110\u1EA1i b\xE1c / \u0110\u1EA1i li\xEAn: \u0110\u1EA1i b\xE1c: Capheny\xA0t\u0103ng t\u1EA7m \u0111\xE1nh, ti\xEAu hao n\u0103ng l\u01B0\u1EE3ng m\u1ED7i l\u1EA7n t\u1EA5n c\xF4ng (t\u1EF1 \u0111\u1ED9ng chuy\u1EC3n v\u1EC1 \u0110\u1EA1i li\xEAn khi h\u1EBFt n\u0103ng l\u01B0\u1EE3ng) v\xE0 b\u1EAFn xuy\xEAn m\u1EE5c ti\xEAu, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Ngo\xE0i ra do s\xFAng n\u1EB7ng, v\xE0 s\u1EE9c gi\u1EADt cao n\xEAn Capheny b\u1ECB gi\u1EA3m t\u1ED1c ch\u1EA1y.\u0110\u1EA1i li\xEAn: Capheny \u0111\u01B0\u1EE3c h\u1ED3i n\u0103ng l\u01B0\u1EE3ng, c\xE0ng nhi\u1EC1u n\u1EBFu t\u1EA5n c\xF4ng l\xEAn k\u1EBB \u0111\u1ECBch. C\xF4 n\xE0ng s\u1EBD b\u1EAFn hai vi\xEAn li\xEAn t\u1EE5c, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s2: "Pha ph\u1EA3n l\u1EF1c / Pha \u0111\u1ED9ng l\u1EF1c: Pha ph\u1EA3n l\u1EF1c:\xA0Capheny l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 l\xE0m m\u1EDBi ho\u1EA1t \u1EA3nh t\u1EA5n c\xF4ng. \u0110\u1ED3ng th\u1EDDi, m\u1ED7i \u0111\xF2n \u0111\xE1nh c\u1EE7a c\xF4 s\u1EBD t\u1EA1o b\xF9a ch\xED m\u1EA1ng\xA0t\u0103ng t\u1EF7 l\u1EC7 ch\xED m\u1EA1ng, c\u1ED9ng d\u1ED3n 10 l\u1EA7n. Xu\u1EA5t hi\u1EC7n \u1EDF tr\u1EA1ng th\xE1i \u0110\u1EA1i b\xE1c.Pha \u0111\u1ED9ng l\u1EF1c: Capheny xo\xE1 hi\u1EC7u \u1EE9ng l\xE0m ch\u1EADm \u0111ang ch\u1ECBu, t\u0103ng t\u1ED1c ch\u1EA1y, \u0111\u1ED3ng th\u1EDDi nh\u1EADn b\xF9a xuy\xEAn gi\xE1p,\xA0c\u1ED9ng d\u1ED3n 10 l\u1EA7n. Xu\u1EA5t hi\u1EC7n \u1EDF tr\u1EA1ng th\xE1i \u0110\u1EA1i li\xEAn, B\xF9a xuy\xEAn gi\xE1p v\xE0 b\xF9a ch\xED m\u1EA1ng s\u1EBD chuy\u1EC3n ho\xE1 to\xE0n b\u1ED9 th\xE0nh b\xF9a t\u01B0\u01A1ng \u1EE9ng khi Capheny \u0111\u1ED5i d\u1EA1ng s\xFAng",
      s3: "M\u01B0a li\xEAn thanh: Capheny x\u1EA3 15 \u0111\u1EE3t m\u01B0a \u0111\u1EA1n li\xEAn t\u1EE5c theo h\xECnh n\xF3n ph\xEDa tr\u01B0\u1EDBc g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. K\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD b\u1ECB gi\u1EA3m gi\xE1p; hi\u1EC7u \u1EE9ng c\xF3 c\u1ED9ng d\u1ED3n. Su\u1ED1t th\u1EDDi gian n\xE0y Capheny v\u1EABn c\xF3 th\u1EC3 di chuy\u1EC3n, b\xF9 l\u1EA1i b\u1ECB gi\u1EA3m t\u1ED1c ch\u1EA1y."
    },
    meta_data: {
      win_rate: 49.44,
      pick_rate: 8.8,
      ban_rate: 0.03
    },
    counters: [
      "Stuart",
      "Tel'Annas",
      "Yorn"
    ]
  },
  {
    id: "hero_192",
    name: "Celica",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/192_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "B\u1EAFn d\u1ED3n: Celia \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\u1ECBch \u0111\u01B0\u1EE3c t\u0103ng ch\xED m\u1EA1ng v\xE0 c\xF4ng v\u1EADt l\xFD, c\u1ED9ng d\u1ED3n 5 l\u1EA7n.",
      s1: "B\xF9ng n\u1ED5: Celia t\u0103ng t\u1ED1c ch\u1EA1y (gi\u1EA3m d\u1EA7n theo th\u1EDDi gian) \u0111\u1ED3ng th\u1EDDi c\xF3 th\u1EC3 h\u1EE7y tr\u1EA1ng th\xE1i ph\xE1o gi\xE0n.N\u1ED9i t\u1EA1i: T\u0103ng c\xF4ng v\u1EADt l\xFD",
      s2: "M\xECn \u0111\u1ECBnh v\u1ECB: Celia b\u1EAFn m\xECn \u0111\u1ECBnh v\u1ECB theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh \u0111\u1ED3ng th\u1EDDi nh\xECn r\xF5 ph\u1EA1m vi xung quanh m\xECn. N\u1EBFu ch\u1EA1m ph\u1EA3i m\xECn s\u1EBD ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD; n\u1EBFu t\u01B0\u1EDBng \u0111\u1ECBch ch\u1EA1m ph\u1EA3i s\u1EBD b\u1ECB l\xE0m ch\u1EADm v\xE0 ch\u1ECBu th\xEAm gi\u1EA3m gi\xE1p.\u0110\u1ED3ng th\u1EDDi Celia \u0111\u01B0\u1EE3c nh\u1EADn l\xE1 ch\u1EAFn mi\u1EC5n s\xE1t th\u01B0\u01A1ng. T\u1ED1i \u0111a Celia t\xEDch l\u0169y \u0111\u01B0\u1EE3c 2 m\xECn \u0111\u1ECBnh v\u1ECB.",
      s3: "Ph\xE1o th\u1EA7n c\xF4ng: Celia m\u1EDF tr\u1EA1ng th\xE1i ph\xE1o gi\xE0n, t\u0103ng gi\xE1p v\xE0 gi\xE1p ph\xE9p nh\u01B0ng kh\xF4ng th\u1EC3 di chuy\u1EC3n. M\u1ED7i \u0111\xF2n b\u1EAFn th\u01B0\u1EDDng l\xEAn \u0111\u1ECBch trong trung t\xE2m ph\u1EA1m vi g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, t\u1ED5ng c\u1ED9ng c\xF3 th\u1EC3 b\u1EAFn 7 l\u1EA7n. K\xEDch ho\u1EA1t l\u1EA1i chi\xEAu s\u1EBD h\u1EE7y tr\u1EA1ng th\xE1i ph\xE1o gi\xE0n."
    },
    meta_data: {
      win_rate: 47.47,
      pick_rate: 0.78,
      ban_rate: 0.01
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_206",
    name: "Charlotte",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://lienquan.garena.vn/wp-content/uploads/2024/07/20600s-150x150.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Th\u1EA5t tinh ki\u1EBFm tr\u1EADn: N\u1ED9i t\u1EA1i: B\u1EA5t k\u1EF3 chi\xEAu n\xE0o c\u1EE7a Charlotte tr\xFAng \u0111\xEDch \u0111\u1EC1u s\u1EBD gi\xFAp c\xF4 \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a chi\xEAu ti\u1EBFp theo, \u0111\u1ED3ng th\u1EDDi t\xEDch l\u0169y 1 c\u1ED9ng d\u1ED3n d\u1EA5u \u1EA5n. \u0110\u1EE7 3 c\u1ED9ng d\u1ED3n, Charlotte s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp.",
      s1: "Tam gi\xE1c ki\u1EBFm kh\xED: Chi\xEAu kh\u1EDFi \u0111\u1EA7u: Charlotte tung tam gi\xE1c ki\u1EBFm kh\xED theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng cho k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng bay, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 t\u0103ng t\u1ED1c cho b\u1EA3n th\xE2n.",
      s2: "L\u1EE5c th\u1EE9c ki\u1EBFm \u1EA3nh: Chi\xEAu kh\u1EDFi \u0111\u1EA7u: Charlotte \u0111\u1ED9t k\xEDch theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y nhi\u1EC1u l\u1EA7n s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n.",
      s3: "Ph\xE1 kh\xF4ng quang \u0111i\u1EBFm: Chi\xEAu kh\u1EDFi \u0111\u1EA7u: V\u1EBD l\xEAn nh\u1EEFng \u0111\u01B0\u1EDDng ki\u1EBFm \u1EA3nh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD cho m\u1EE5c ti\xEAu v\xE0 l\xE0m ch\u1EADm ch\xFAng, \u0111\u1ED3ng th\u1EDDi nh\u1EADn mi\u1EC5n kh\u1ED1ng v\xE0 mi\u1EC5n th\u01B0\u01A1ng."
    },
    meta_data: {
      win_rate: 47.93,
      pick_rate: 0.79,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_113",
    name: "Chaugnar",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/113_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110\u1EA1i d\u01B0\u01A1ng s\xE2u th\u1EB3m: N\u1ED9i t\u1EA1i: M\u1ED7i khi tung chi\xEAu 1 s\u1EBD gi\xFAp Chaugnar h\xF3a gi\u1EA3i t\u1EA5t c\u1EA3 hi\u1EC7u \u1EE9ng kh\u1ED1ng ch\u1EBF, \u0111\u1ED3ng th\u1EDDi t\u0103ng mi\u1EC5n th\u01B0\u01A1ng v\xE0 t\u1ED1c ch\u1EA1y.",
      s1: "Th\u1EE7y tri\u1EC1u: Chaugnar tri\u1EC7u h\u1ED3i m\u1ED9t lu\u1ED3ng n\u0103ng l\u01B0\u1EE3ng c\xF4ng k\xEDch k\u1EBB \u0111\u1ECBch, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn b\u1EA5t k\u1EF3 k\u1EBB \u0111\u1ECBch n\xE0o tr\xFAng chi\xEAu v\xE0 gi\u1EA3m 50% t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n.",
      s2: 'N\u01B0\u1EDBc xo\xE1y: "Chaugnar rung \u0111\u1ED9ng c\u1EA3 c\u01A1 th\u1EC3 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn.\u0110\u1ED3ng th\u1EDDi, gi\u1EA3m 1 gi\xE2y h\u1ED3i chi\xEAu Th\u1EE7y tri\u1EC1u v\xE0 c\u01B0\u1EDDng h\xF3a s\xE1t th\u01B0\u01A1ng c\u1EE7a \u0111\xF2n N\u01B0\u1EDBc xo\xE1y k\u1EBF ti\u1EBFp, c\u1ED9ng d\u1ED3n t\u1ED1i\u0111a 4 l\u1EA7n."',
      s3: 'V\u1EF1c h\u1ED7n lo\u1EA1n: "Chaugnar g\u1ECDi ra m\u1ED9t lu\u1ED3ng n\u0103ng l\u01B0\u1EE3ng h\u1ED7n \u0111\u1ED9n gi\xFAp h\xF3a gi\u1EA3i m\u1ECDi hi\u1EC7u \u1EE9ng kh\u1ED1ng ch\u1EBF tr\xEAn \u0111\u1ED3ng minh.K\u1EF9 n\u0103ng n\xE0y c\xF2n t\u0103ng kh\xE1ng hi\u1EC7u \u1EE9ng, mi\u1EC5n th\u01B0\u01A1ng v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y trong 1 gi\xE2y cho \u0111\u1ED3ng minh, 3 gi\xE2y cho b\u1EA3n th\xE2n.\u0110\u1ED3ng th\u1EDDi gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu c\u1EE7a N\u01B0\u1EDBc xo\xE1y c\xF2n\xA01 gi\xE2y, k\xE9o d\xE0i\xA06 gi\xE2y\xA0v\xE0 s\u1EED d\u1EE5ng kh\xF4ng t\u1ED1n n\u0103ng l\u01B0\u1EE3ng."'
    },
    meta_data: {
      win_rate: 50.57,
      pick_rate: 2.73,
      ban_rate: 0.11
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_171",
    name: "Cresht",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/171_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: '\u0110\u1EA1i d\u01B0\u01A1ng th\u1ECBnh n\u1ED9: "N\u1ED9i t\u1EA1i: C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Cresht gi\xFAp t\xEDch l\u0169y N\u1ED9. Khi \u0111\u1EA1t m\u1ED1c t\u1ED1i \u0111a h\u1EAFn c\xF3 th\u1EC3 h\xF3a th\xE0nh Th\u1EE7y th\u1EA7n v\u1EDBi quy\u1EC1n n\u0103ng l\xE0m ch\u1EADm k\u1EBB \u0111\u1ECBch xung quanh \u0111i m\u1ED7i khi tung chi\xEAu.\u0110\u1ED3ng th\u1EDDi, h\u1EAFn \u0111\xE1nh th\u01B0\u1EDDng \u0111\u01B0\u1EE3c t\u0103ng th\xEAm c\xF4ng v\u1EADt l\xFD."',
      s1: '\u0110inh ba th\u1EE7y th\u1EA7n: "Cresht vung c\xE2y \u0111inh ba kh\u1ED5ng l\u1ED3 \u0111\u1EADp v\xE0o c\xE1c k\u1EBB \u0111\u1ECBnh xung quanh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi gi\xFAp t\u0103ng N\u1ED9.Khi h\xF3a th\xE0nh Th\u1EE7y th\u1EA7n, h\u1EAFn \u0111i\xEAn cu\u1ED3ng t\u1EA5n c\xF4ng v\xE0o k\u1EBB \u0111\u1ECBch tr\u01B0\u1EDBc m\u1EB7t g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD."',
      s2: 'B\u1ECDt bong b\xF3ng: "Cresht nh\u1EA3y t\u1EDBi \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh t\u1EA1o ra m\u1ED9t c\u01A1n s\xF3ng gi\xFAp b\u1EA3o v\u1EC7 t\u01B0\u1EDBng \u0111\u1ED3ng minh v\xE0 t\u0103ng N\u1ED9 cho b\u1EA3n th\xE2n.Khi \u1EDF tr\u1EA1ng th\xE1i Th\u1EE7y th\u1EA7n, Cresht nh\u1EA3y t\u1EDBi \u0111\u1ECBa \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi \u1EA3nh h\u01B0\u1EDFng."',
      s3: 'Th\u1EE7y th\u1EA7n: "Khi \u0111\u1EA1t \u0111\u1EE7 N\u1ED9, Cresht c\xF3 th\u1EC3 h\xF3a th\xE0nh b\u1EA3n th\u1EC3 Th\u1EE7y th\u1EA7n gi\xFAp nh\u1EADn m\u1ED9t l\u1EDBp b\u1EA3o h\u1ED9 h\xF9ng m\u1EA1nh, \u0111\u1ED3ng th\u1EDDi t\u1EA1o ra m\u1ED9t c\u01A1n \u0111\u1EA1i h\u1ED3ng th\u1EE7y \u0111\u1EA9y l\xF9i k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.Khi l\u01B0\u1EDBt tr\xEAn c\u01A1n s\xF3ng n\xE0y, h\u1EAFn \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\u1ED9 di chuy\u1EC3n."'
    },
    meta_data: {
      win_rate: 48.47,
      pick_rate: 2.31,
      ban_rate: 0.02
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_523",
    name: "D'Arcy",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/523_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "L\u1EF1c l\u01B0\u1EE3ng th\u1EE9 nguy\xEAn: N\u1ED9i t\u1EA1i: D'Arcy t\u0103ng L\u1EF1c l\u01B0\u1EE3ng th\u1EE9 nguy\xEAn trong su\u1ED1t tr\u1EA1ng th\xE1i giao tranh th\xF4ng qua c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 chi\xEAu tr\xFAng \u0111\u1ED1i ph\u01B0\u01A1ng. N\u1EBFu tho\xE1t kh\u1ECFi giao tranh, L\u1EF1c l\u01B0\u1EE3ng th\u1EE9 nguy\xEAn s\u1EBD nhanh ch\xF3ng gi\u1EA3m d\u1EA7n. Khi L\u1EF1c l\u01B0\u1EE3ng th\u1EE9 nguy\xEAn \u0111\u1EA1t \u0111\u1EBFn t\u1ED1i \u0111a, D'Arcy \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a trong 8 gi\xE2y, h\u1ED3i 20% n\u0103ng l\u01B0\u1EE3ng \u0111\xE3 t\u1ED5n th\u1EA5t, \u0111\u1ED3ng th\u1EDDi \u0111\u01B0\u1EE3c t\u0103ng 20% t\u1ED1c ch\u1EA1y v\xE0 c\u01B0\u1EDDng h\xF3a k\u1EF9 n\u0103ng th\u01B0\u1EDDng k\u1EBF ti\u1EBFp.",
      s1: "Du h\xE0nh th\u1EE9 nguy\xEAn: D'Arcy ti\u1EBFn v\xE0o m\u1ED9t chi\u1EC1u kh\xF4ng gian c\u1EA5p cao trong 1.5 gi\xE2y gi\xFAp b\u1EA3n th\xE2n mi\u1EC5n nhi\u1EC5m kh\u1ED1ng ch\u1EBF \u0111\u1ED3ng th\u1EDDi \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 ch\u1ECBu gi\u1EA3m s\xE1t th\u01B0\u01A1ng. \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng ti\u1EBFp theo trong v\xF2ng 5 gi\xE2y s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng t\u1EA7m \u0111\xE1nh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n. Du h\xE0nh th\u1EE9 nguy\xEAn s\u1EBD m\u1EA5t t\xE1c d\u1EE5ng ngay khi D'Arcy tung chi\xEAu ho\u1EB7c \u0111\xF2n \u0111\xE1nh. L\u1EF1c l\u01B0\u1EE3ng th\u1EE9 nguy\xEAn \u0111\u1EA1t t\u1ED1i \u0111a gi\xFAp c\u01B0\u1EDDng h\xF3a: Darcy t\u0103ng th\xEAm t\u1ED1c ch\u1EA1y v\xE0 h\u1ED3i ph\u1EE5c m\xE1u.",
      s2: "L\u1EADp ph\u01B0\u01A1ng th\u1EE9 nguy\xEAn: D'Arcy t\u1EA1o ra m\u1ED9t L\u1EADp ph\u01B0\u01A1ng th\u1EE9 nguy\xEAn t\u1EA1i \u0111i\u1EC3m \u0111\xE3 ch\u1ECDn, th\u1EE9 s\u1EBD b\xF9ng n\u1ED5 sau 1,25 gi\xE2y v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p L\u1EF1c l\u01B0\u1EE3ng th\u1EE9 nguy\xEAn \u0111\u1EA1t t\u1ED1i \u0111a gi\xFAp c\u01B0\u1EDDng h\xF3a: gia t\u0103ng ph\u1EA1m vi s\xE1t th\u01B0\u01A1ng c\u1EE7a L\u1EADp ph\u01B0\u01A1ng th\u1EE9 nguy\xEAn, \u0111\u1ED3ng th\u1EDDi gi\xFAp D'Arcy t\xEDch l\u0169y th\xEAm 10 L\u1EF1c l\u01B0\u1EE3ng th\u1EE9 nguy\xEAn theo m\u1ED7i \u0111\u01A1n v\u1ECB tr\xFAng chi\xEAu.",
      s3: "Ma tr\u1EADn th\u1EE9 nguy\xEAn: D'Arcry t\u1EA1o ra m\u1ED9t Ma tr\u1EADn th\u1EE9 nguy\xEAn t\u1EA1i \u0111i\u1EC3m \u0111\xE3 ch\u1ECDn, t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 ch\u1ECBu d\u1EA5u \u1EA5n th\u1EE9 nguy\xEAn. Sau 2 gi\xE2y t\u1EA5t c\u1EA3 n\u1EA1n nh\xE2n \u0111ang ph\u1EA3i ch\u1ECBu d\u1EA5u \u1EA5n s\u1EBD b\u1ECB c\u01B0\u1EE1ng \xE9p truy\u1EC1n t\u1ED1ng v\u1EC1 Ma tr\u1EADn v\xE0 tr\xFAng cho\xE1ng tho\xE1ng ch\u1ED1c (th\u1EDDi gian h\u1ED3i chi\xEAu b\u1EAFt \u0111\u1EA7u t\xEDnh t\u1EEB l\xFAc n\xE0y). \u0110\u1EB7c bi\u1EC7t trong v\xF2ng 6 gi\xE2y sau khi tung chi\xEAu, D'Arcy c\xF3 th\u1EC3 k\xEDch ho\u1EA1t l\u1EA7n n\u1EEFa \u0111\u1EC3 t\u1EF1 truy\u1EC1n t\u1ED1ng b\u1EA3n th\xE2n v\u1EC1 t\xE2m Ma tr\u1EADn v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p"
    },
    meta_data: {
      win_rate: 48.39,
      pick_rate: 1.56,
      ban_rate: 0.01
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "Liliana"
    ]
  },
  {
    id: "hero_534",
    name: "Dextra",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/534_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Huy\u1EBFt ch\xFA: M\u1ED7i khi Dextra \u0111\xE1nh th\u01B0\u1EDDng ho\u1EB7c tung chi\xEAu tr\xFAng k\u1EBB \u0111\u1ECBch, c\xF4 s\u1EBD \u0111\u01B0\u1EE3c nh\u1EADn th\xEAm t\u1ED1c \u0111\xE1nh. N\u1EBFu \u0111\xE1nh tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch, t\u1ED1c \u0111\xE1nh s\u1EBD \u0111\u01B0\u1EE3c c\u1ED9ng d\u1ED3n hai l\u1EA7n.M\u1ED7i c\u1ED9ng d\u1ED3n gi\xFAp t\u0103ng 5% t\u1ED1c \u0111\xE1nh (m\u1ED7i 3 c\u1EA5p t\u01B0\u1EDBng t\u0103ng th\xEAm 1%), hi\u1EC7u \u1EE9ng k\xE9o d\xE0i 5 gi\xE2y v\xE0 c\xF3 th\u1EC3 c\u1ED9ng d\u1ED3n t\u1ED1i \u0111a 16 l\u1EA7n.Khi t\u1ED1c \u0111\xE1nh \u0111\u1EA1t gi\u1EDBi h\u1EA1n, \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 chi\xEAu th\u1EE9c c\u1EE7a Dextra s\u1EBD k\xE8m theo 60 (+12 m\u1ED7i c\u1EA5p t\u01B0\u1EDBng) s\xE1t th\u01B0\u01A1ng chu\u1EA9n.",
      s1: "Lu\xE2n h\u1ED3i c\u01B0a: Dextra l\u1EADp t\u1EE9c x\xF3a m\u1ECDi hi\u1EC7u \u1EE9ng l\xE0m ch\u1EADm v\xE0 c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF g\xE2y 150 (+100% c\xF4ng v\u1EADt l\xFD) + 30/c\u1EA5p chi\xEAu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm 50% trong 1 gi\xE2y.Trong th\u1EDDi gian n\xE0y, Dextra nh\u1EADn tr\u1EA1ng th\xE1i mi\u1EC5n kh\u1ED1ng v\xE0 c\u1EE9 m\u1ED7i 0.5 gi\xE2y s\u1EBD t\u0103ng th\xEAm 50 t\u1ED1c ch\u1EA1y, c\u1ED9ng d\u1ED3n t\u1ED1i \u0111a 6 l\u1EA7n. K\u1EBB \u0111\u1ECBch ch\u1EA1m ph\u1EA3i s\u1EBD ch\u1ECBu 50 (+25% c\xF4ng v\u1EADt l\xFD) + 10/c\u1EA5p chi\xEAu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.Sau khi t\u1EE5 l\u1EF1c k\u1EBFt th\xFAc, hi\u1EC7u \u1EE9ng t\u0103ng t\u1ED1c s\u1EBD duy tr\xEC th\xEAm 3 gi\xE2y.",
      s2: "Huy\u1EBFt s\xE1t c\u01B0a: Th\u1EDDi gian h\u1ED3i chi\xEAu 8s - 0.4s/c\u1EA5p chi\xEAu.Dextra tri\u1EC7u h\u1ED3i huy\u1EBFt lu\xE2n c\u01B0a t\u1EEB tr\xEAn tr\u1EDDi r\u01A1i xu\u1ED1ng g\xE2y 100 (+25% c\xF4ng v\u1EADt l\xFD) + 20/c\u1EA5p chi\xEAu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn khu v\u1EF1c ch\u1EC9 \u0111\u1ECBnh.Sau tho\xE1ng ch\u1ED1c, l\u01B0\u1EE1i c\u01B0a xo\xE1y s\u1EBD di chuy\u1EC3n v\u1EC1 ph\xEDa Dextra v\xE0 k\xE9o theo c\xE1c m\u1EE5c ti\xEAu tr\xEAn \u0111\u01B0\u1EDDng \u0111i \u0111\u1ED3ng th\u1EDDi g\xE2y 100 (+25% c\xF4ng v\u1EADt l\xFD) + 20/c\u1EA5p chi\xEAu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.Khi l\u01B0\u1EE1i c\u01B0a tr\u1EDF v\u1EC1, n\xF3 s\u1EBD ph\xE1t n\u1ED5 ti\u1EBFp v\xE0 g\xE2y 100 (+25% c\xF4ng v\u1EADt l\xFD) + 20/c\u1EA5p chi\xEAu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB \u0111\u1ECBch xung quanh.M\u1ED7i k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu gi\xFAp Dextra h\u1ED3i 2% m\xE1u t\u1ED1i \u0111a, n\u1EBFu tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD h\u1ED3i th\xEAm 3% m\xE1u t\u1ED1i \u0111a.",
      s3: "Hi\u1EBFn t\u1EBF: Th\u1EDDi gian h\u1ED3i chi\xEAu 70s - 10s/c\u1EA5p chi\xEAuDextra gi\u1EA3i tr\u1EEB kh\u1ED1ng ch\u1EBF, mi\u1EC5n nhi\u1EC5m s\xE1t th\u01B0\u01A1ng trong 2.5 gi\xE2y v\xE0 chuy\u1EC3n h\xF3a 20% s\xE1t th\u01B0\u01A1ng nh\u1EADn v\xE0o th\xE0nh h\u1ED3i m\xE1u.Khi nh\u1EADn s\xE1t th\u01B0\u01A1ng ch\xED t\u1EED, n\u1EBFu chi\xEAu ch\u01B0a trong th\u1EDDi gian h\u1ED3i th\xEC Dextra s\u1EBD t\u1EF1 \u0111\u1ED9ng k\xEDch ho\u1EA1t chi\xEAu v\xE0 \u0111\u01B0a chi\xEAu v\xE0o tr\u1EA1ng th\xE1i h\u1ED3i."
    },
    meta_data: {
      win_rate: 48.86,
      pick_rate: 0.3,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_152",
    name: "Diaochan",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/152_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "N\u1EEF ho\xE0ng b\u0103ng tuy\u1EBFt: N\u1ED9i t\u1EA1i: N\u1EBFu trong 1 th\u1EDDi gian kh\xF4ng b\u1ECB c\xF4ng k\xEDch hay kh\u1ED1ng ch\u1EBF, \u0110i\xEAu Thuy\u1EC1n s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c m\u1ED9t l\u1EDBp l\xE1 ch\u1EAFn gi\xFAp ch\u1EB7n ho\xE0n to\xE0n m\u1ED9t k\u1EF9 n\u0103ng, bao g\u1ED3m c\u1EA3 s\xE1t th\u01B0\u01A1ng v\xE0 hi\u1EC7u \u1EE9ng kh\u1ED1ng ch\u1EBF.",
      s1: "S\u01B0\u01A1ng gi\xE1: \u0110i\xEAu Thuy\u1EC1n tung ph\xE9p thu\u1EADt b\u0103ng gi\xE1 l\xEAn m\u1ED9t v\xF9ng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 l\xE0m ch\u1EADm 50%\xA0t\u1ED1c ch\u1EA1y c\u1EE7a c\xE1c k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu.",
      s2: 'Tuy\u1EBFt li\xEAn: "\u0110i\xEAu Thuy\u1EC1n t\u1EA1o b\xF4ng sen b\u0103ng g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 \u0111\xF3ng b\u0103ng c\xE1c k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu trong 2.5 gi\xE2y. \u0110i\xEAu Thuy\u1EC1n c\xF3 th\u1EC3 t\xEDch tr\u1EEF t\u1ED1i \u0111a 2 \u0111\xF3a Tuy\u1EBFt li\xEAn.N\u1EBFu m\u1EE5c ti\xEAu tr\xFAng chi\xEAu li\xEAn t\u1EE5c 2 l\u1EA7n trong 5 gi\xE2y s\u1EBD ph\u1EA3i ch\u1ECBu \u0111\xF3ng b\u0103ng \xEDt h\u01A1n \u1EDF l\u1EA7n th\u1EE9 2. \u0110\u1EB7c bi\u1EC7t, nh\u1EEFng n\u1EA1n nh\xE2n b\u1ECB \u0111\xF3ng b\u0103ng s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p t\u1EEB m\u1ECDi ngu\u1ED3n s\xE1t th\u01B0\u01A1ng c\u1EE7a \u0110i\xEAu Thuy\u1EC1n.\xA0"',
      s3: 'B\xE3o tuy\u1EBFt: "\u0110i\xEAu Thuy\u1EC1n g\u1ECDi ra m\u1ED9t tr\u1EADn b\xE3o tuy\u1EBFt t\u1EA5n c\xF4ng nh\u1EEFng k\u1EBB th\xF9 trong ph\u1EA1m vi, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n. \u0110\u1ED3ng th\u1EDDi, c\xF4 \u0111\u01B0\u1EE3c t\u0103ng th\xEAm gi\xE1p.Chi\xEAu th\u1EE9c n\xE0y c\u1EA7n ni\u1EC7m chi\xEAu \u0111\u1EC3 th\u1EF1c hi\u1EC7n, t\u1ED1i \u0111a k\xE9o d\xE0i 5.3 gi\xE2y, tuy nhi\xEAn sau 0.6 gi\xE2y \u0111\u1EA7u n\u1EBFu di chuy\u1EC3n ho\u1EB7c \u1EA5n chi\xEAu l\u1EA7n n\u1EEFa th\xEC c\xF3 th\u1EC3 h\u1EE7y."'
    },
    meta_data: {
      win_rate: 48.72,
      pick_rate: 3.33,
      ban_rate: 0.06
    },
    counters: [
      "Lauriel",
      "D'Arcy",
      "Liliana"
    ]
  },
  {
    id: "hero_530",
    name: "Dirak",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/530_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Gi\xE1p n\u0103ng l\u01B0\u1EE3ng: Khi m\xE1u s\u1EAFp c\u1EA1n, Dirak s\u1EBD ti\xEAu hao n\u0103ng l\u01B0\u1EE3ng \u0111\u1EC3 ch\u1ED1ng \u0111\u1EE1 s\xE1t th\u01B0\u01A1ng, m\u1ED7i 1 n\u0103ng l\u01B0\u1EE3ng s\u1EBD ch\u1ED1ng \u0111\u1EE1 \u0111\u01B0\u1EE3c 1 s\xE1t th\u01B0\u01A1ng",
      s1: "Kim quang \u1EA5n: Dirak tri\u1EC7u h\u1ED3i ra Kim quang \u1EA5n \u0111\xE1nh v\u1EC1 ph\xEDa tr\u01B0\u1EDBc, \u0111\u1EA9y l\xF9i t\u01B0\u1EDBng \u0111\u1ECBch trong tho\xE1ng ch\u1ED1c.",
      s2: "Thi\xEAn ho\u1EA3 tr\u1EADn: Dirak d\u1EF1ng l\xEAn m\u1ED9t ph\xE1p tr\u1EADn t\u1EA1i khu v\u1EF1c ch\u1EC9 \u0111\u1ECBnh. Trong tho\xE1ng ch\u1ED1c, thi\xEAn th\u1EA1ch s\u1EBD r\u01A1i xu\u1ED1ng \u0111\u1EA9y l\xF9i \u0111\u1ECBch. \u0110\u1ED3ng th\u1EDDi, Dirak c\u0169ng c\xF3 th\u1EC3 ch\u1ECDn h\u01B0\u1EDBng r\u01A1i cho thi\xEAn th\u1EA1ch.",
      s3: "L\xF4 c\u1ED1t t\u1EED quang: Dirak g\u1ECDi ra m\u1ED9t t\u1EA5m ch\u1EAFn n\u0103ng l\u01B0\u1EE3ng ch\u1EB7n \u0111\u1EE9ng m\u1ECDi ph\xE1t \u0111\u1EA1n c\u1EE7a k\u1EBB \u0111\u1ECBch v\xE0 sau \u0111\xF3 gi\xFAp h\u1EAFn thi tri\u1EC3n Ph\xE1o t\u1EED quang.Ph\xE1o t\u1EED quang: G\xE2y s\xE1t th\u01B0\u01A1ng c\u1EF1c l\u1EDBn cho k\u1EBB \u0111\u1ECBch tr\xEAn ph\u1EA1m vi b\u1EAFn th\u1EB3ng."
    },
    meta_data: {
      win_rate: 51.82,
      pick_rate: 2.87,
      ban_rate: 0.13
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_159",
    name: "Dolia",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://lienquan.garena.vn/wp-content/uploads/2024/07/15900s.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Linh l\u1EF1c bi\u1EC3n s\xE2u: Dolia h\xF3a th\xE0nh m\u1EF9 nh\xE2n ng\u01B0 khi di chuy\u1EC3n \u1EDF \u0111\u1ECBa h\xECnh ho\u1EB7c m\xF4i tr\u01B0\u1EDDng n\u01B0\u1EDBc. T\u1ED1c \u0111\u1ED9 di chuy\u1EC3n c\u1EE7a Dolia s\u1EBD gi\u1EA3m, nh\u01B0ng \u0111\u01B0\u1EE3c h\u1ED3i ph\u1EE5c m\xE1u v\xE0 n\u0103ng l\u01B0\u1EE3ng \u0111\u1ED3ng th\u1EDDi \u0111\xF2n \u0111\xE1nh g\xE2y s\xE1t th\u01B0\u01A1ng di\u1EC7n r\u1ED9ng.Kh\u1EA3 n\u0103ng h\u1ED3i ph\u1EE5c c\u1EE7a Dolia \u0111\u01B0\u1EE3c thay th\u1EBF b\u1EDFi Linh l\u1EF1c bi\u1EC3n s\xE2u, cho ph\xE9p c\xF4 thi\u1EBFt l\u1EADp kh\u1EBF \u01B0\u1EDBc v\u1EDBi m\u1ED9t \u0111\u1ED3ng minh. Khi s\u1EED d\u1EE5ng h\u1ED3i ph\u1EE5c, c\xF4 n\xE0ng s\u1EBD \u01B0u ti\xEAn cho \u0111\u1ED3ng minh \u0111\u01B0\u1EE3c l\u1EADp kh\u1EBF \u01B0\u1EDBc.",
      s1: "H\u1EA3i d\u01B0\u01A1ng hoan ca: Dolia tung 4 \u0111\u1EE3t s\xF3ng \xE2m thanh, g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 l\xE0m ch\u1EADm m\u1EE5c ti\xEAu. \u0110\u1EE3t s\xF3ng cu\u1ED1i t\u1EA1o ra ti\u1EBFng vang, g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn k\u1EBB \u0111\u1ECBch ch\u1EA1m v\xE0o \u0111\u1ED3ng th\u1EDDi \u0111\u1EE3t s\xF3ng cu\u1ED1i \u0111\xE1nh b\u1EADt t\u01B0\u1EDBng \u0111\u1ECBch khi s\u1EED d\u1EE5ng \u1EDF d\u01B0\u1EDBi n\u01B0\u1EDBc.",
      s2: "H\u1ED3i thi\xEAn th\u1EE7y thu\u1EADt: Dolia nh\u1EA3y l\xEAn kh\xF4ng trung v\xE0 bi\u1EBFn th\xE0nh ti\xEAn c\xE1. Khi ti\u1EBFp \u0111\u1EA5t g\u1EA7n \u0111\u1ED3ng minh m\xE0 \u1EDF tr\xEAn \u0111\u1EA5t li\u1EC1n, c\xF4 t\u1EA1o m\u1ED9t h\u1ED3 n\u01B0\u1EDBc gi\xFAp h\u1ED3i m\xE1u m\u1ED7i gi\xE2y. \u0110\u1ED3ng minh \u1EDF trong h\u1ED3 n\u01B0\u1EDBc do Dolia t\u1EA1o ra c\u0169ng \u0111\u01B0\u1EE3c h\u1ED3i m\xE1u v\xE0 n\u0103ng l\u01B0\u1EE3ng nh\u01B0 Dolia. N\u1EBFu tung chi\xEAu trong khu v\u1EF1c \u0111\u1ECBa h\xECnh c\xF3 n\u01B0\u1EDBc ho\u1EB7c nh\u1EA3y v\xE0o h\u1ED3 n\u01B0\u1EDBc do c\xF4 t\u1EA1o ra, th\u1EDDi gian h\u1ED3i chi\xEAu n\xE0y c\u1EE7a Dolia s\u1EBD gi\u1EA3m 30%. H\u1ED3 n\u01B0\u1EDBc c\u1EE7a Dolia s\u1EBD bi\u1EBFn m\u1EA5t sau 4 gi\xE2y sau khi c\xF4 r\u1EDDi kh\u1ECFi n\xF3.",
      s3: "Ti\xEAn c\xE1 th\xE1nh ca: K\xEDch ho\u1EA1t - Ti\xEAn c\xE1 th\xE1nh ca: Sau khi s\u1EED d\u1EE5ng chi\xEAu, chi\xEAu c\xF3 th\u1EDDi gian h\u1ED3i chi\xEAu l\xE2u nh\u1EA5t hi\u1EC7n t\u1EA1i c\u1EE7a m\u1ED9t \u0111\u1ED3ng minh trong ph\u1EA1m vi s\u1EBD \u0111\u01B0\u1EE3c l\xE0m m\u1EDBi \u0111\u1ED3ng th\u1EDDi c\xF4 c\u0169ng s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c hi\u1EC7u \u1EE9ng l\xE0m m\u1EDBi chi\xEAu \u0111ang h\u1ED3i l\xE2u nh\u1EA5t. Ti\xEAn c\xE1 th\xE1nh ca \u01B0u ti\xEAn cho \u0111\u1ED3ng minh \u0111\u01B0\u1EE3c li\xEAn k\u1EBFt.N\u1ED9i t\u1EA1i - Linh l\u1EF1c bi\u1EC3n s\xE2u: Dolia thi\u1EBFt l\u1EADp kh\u1EBF \u01B0\u1EDBc v\u1EDBi \u0111\u1ED3ng \u0111\u1ED9i \u0111\u01B0\u1EE3c ch\u1ECDn. Khi \u0111\u1ED3ng \u0111\u1ED9i l\u1EADp kh\u1EBF \u01B0\u1EDBc \u1EDF g\u1EA7n Dolia, Ti\xEAn c\xE1 th\xE1nh ca s\u1EBD \u01B0u ti\xEAn l\xE0m m\u1EDBi th\u1EDDi gian h\u1ED3i chi\xEAu cho \u0111\u1ED3ng \u0111\u1ED9i n\xE0y"
    },
    meta_data: {
      win_rate: 50.72,
      pick_rate: 5.14,
      ban_rate: 0.35
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_577",
    name: "Dyadia",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/305770head.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ph\xFAc Duy\xEAn: N\u1ED9i t\u1EA1i:(1) M\u1ED7i 7.5-6 gi\xE2y (gi\u1EA3m theo c\u1EA5p), \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a: Lao \u0111\u1EBFn m\u1EE5c ti\xEAu b\u1EB1ng \u0111\u1ED9ng t\xE1c \u0111u x\xEDch \u0111u, \u0111\xE1 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 h\u1EA5t l\xF9i; n\u1EBFu tr\xFAng, b\u1EADt ng\u01B0\u1EE3c ra sau.(2) Th\u01B0\u1EDFng v\xE0ng & t\u0103ng t\u1ED1c c\u01B0\u1EDDng h\xF3a: Khi \u0111\u1ED3ng minh nh\u1EADn Ch\xFAc Ph\xFAc L\u01B0\u01A1ng Duy\xEAn ho\u1EB7c k\u1EBB \u0111\u1ECBch d\xEDnh L\u1EDDi Nguy\u1EC1n \xC1c Duy\xEAn: +20 v\xE0ng v\xE0 gi\u1EA3m 50% th\u1EDDi gian h\u1ED3i cho \u0111\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a ti\u1EBFp theo.",
      s1: "Trao L\u01B0\u01A1ng Duy\xEAn: G\u1EAFn cho 1 \u0111\u1ED3ng minh: G\u1EAFn L\u01B0\u01A1ng Duy\xEAn \u0111\u1EC3 h\u1ED3i m\xE1u cho m\u1ED9t \u0111\u1ED3ng minh. T\xE1i k\xEDch ho\u1EA1t l\xEAn c\xF9ng ng\u01B0\u1EDDi \u0111\xF3: Dyadia l\u01B0\u1EDBt t\u1EDBi, k\xEDch Ch\xFAc Ph\xFAc, h\u1ED3i nhi\u1EC1u m\xE1u cho c\u1EA3 hai.G\u1EAFn cho 2 \u0111\u1ED3ng minh kh\xE1c nhau: T\u0103ng t\u1ED1c khi l\u1EA1i g\u1EA7n, khi ch\u1EA1m nhau -> Ch\xFAc Ph\xFAc + h\u1ED3i m\xE1u + k\xE9o d\xE0i t\u0103ng t\u1ED1c 2s.Th\u1EDDi gian t\xE1i k\xEDch ho\u1EA1t k\xE9o d\xE0i 5 gi\xE2y.",
      s2: "G\u1EAFn \xC1c Duy\xEAn: \xC1c Duy\xEAn: \u0110\u1ECBch b\u1ECB hi\u1EC7n h\xECnh 5s, ch\u1ECBu damage m\u1ED7i gi\xE2y v\xE0 b\u1ECB ph\u1EA1t 2 v\xE0ng; h\u1EBFt th\u1EDDi gian nh\u1EADn th\xEAm s\xE1t th\u01B0\u01A1ng l\u1EDBn.Hai m\u1EE5c ti\xEAu mang \xC1c Duy\xEAn: L\u1EA1i g\u1EA7n th\xEC ch\u1EADm, ch\u1EA1m nhau th\xEC k\u1EBFt th\xFAc hi\u1EC7u \u1EE9ng s\u1EDBm v\xE0 tr\u1EA3 l\u1EA1i v\xE0ng.T\xE1i k\xEDch ho\u1EA1t: Dyadia lao t\u1EDBi g\xE2y s\xE1t th\u01B0\u01A1ng l\u1EDBn, tr\xF3i 0.75s v\xE0 nh\u1EADn gi\u1EA3m s\xE1t th\u01B0\u01A1ng (hi\u1EC7u l\u1EF1c m\u1EA1nh h\u01A1n n\u1EBFu m\u1EE5c ti\xEAu \u0111ang ch\u1ECBu \xC1c Duy\xEAn).Th\u1EDDi gian t\xE1i k\xEDch ho\u1EA1t k\xE9o d\xE0i 5 gi\xE2y.",
      s3: "T\u1EE5 Nh\xE2n Duy\xEAn: Dyadia ph\xF3ng \u0111\xE0n tinh linh theo h\u01B0\u1EDBng ch\u1ECDn:- \u0110\u1ED3ng minh tr\xFAng: nh\u1EADn L\u01B0\u01A1ng Duy\xEAn + h\u1ED3i m\xE1u.- K\u1EBB \u0111\u1ECBch tr\xFAng: b\u1ECB \xC1c Duy\xEAn + s\xE1t th\u01B0\u01A1ng ph\xE9p.\u0110\u1ED1i v\u1EDBi m\u1EE5c ti\xEAu \u0111\xE3 c\xF3 hi\u1EC7u \u1EE9ng:- \u0110\u1ED3ng minh: l\xE0m m\u1EDBi L\u01B0\u01A1ng Duy\xEAn, h\u1ED3i th\xEAm m\xE1u + t\u0103ng t\u1ED1c 2s.- K\u1EBB \u0111\u1ECBch: l\xE0m m\u1EDBi \xC1c Duy\xEAn, ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng + tr\xF3i 1s.N\u1ED9i t\u1EA1i chi\xEAu: M\u1ED7i 1 v\xE0ng Dyadia ki\u1EBFm t\u1EEB b\u1ED9 chi\xEAu t\u0103ng h\u1ED3i m\xE1u v\xE0 s\xE1t th\u01B0\u01A1ng ph\xE9p cho Chi\xEAu 3."
    },
    meta_data: {
      win_rate: 0,
      pick_rate: 0,
      ban_rate: 0
    },
    counters: []
  },
  {
    id: "hero_595",
    name: "Edras",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl-ops-kgvn-garenanow-com.obs.ap-southeast-3.myhuaweicloud.com/hok/HeroHeadPath/305950head.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Lu\xE2n h\u1ED3i quang tr\u1EA3m: Edras d\u1EA7n gi\u1EA3i ph\xF3ng s\u1EE9c m\u1EA1nh, \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 chi\xEAu 2 tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD gi\xFAp b\u1EA3n th\xE2n nh\u1EADn th\xEAm 10 kinh nghi\u1EC7m.Khi \u1EDF tr\u1EA1ng th\xE1i Quang minh, Edras \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 t\u0103ng xuy\xEAn gi\xE1p; khi \u1EDF tr\u1EA1ng th\xE1i H\u1EAFc \xE1m, m\u1ED7i c\xF4ng v\u1EADt l\xFD th\xEAm s\u1EBD gi\xFAp b\u1EA3n th\xE2n t\u0103ng t\u1ED1c \u0111\xE1nh.",
      s1: "\u0110\u1ED9t k\xEDch d\u0169ng m\xE3nh: Edras \u0111\u1ED9t k\xEDch theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh.",
      s2: "H\xF3a th\xE2n Quang minh: Ngay kho\u1EA3nh kh\u1EAFc h\u1ECDc \u0111\u01B0\u1EE3c chi\xEAu 4, Edras k\xEDch ho\u1EA1t s\u1EE9c m\u1EA1nh th\xE1nh ma \u0111\u1EA1o s\u01B0 v\xE0 chuy\u1EC3n sang h\xECnh th\xE1i Quang minh.D\u1EA1ng th\u1EA7nN\u1ED9i t\u1EA1i \u2013 Th\u1EA7n kh\xED Quang minh: Sau khi tung chi\xEAu, Edras s\u1EBD c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp gi\xFAp t\u0103ng t\u1EA7m b\u1EAFn v\xE0 hi\u1EC7u \u1EE9ng xuy\xEAn th\u1EA5u \u0111\u1ED3ng th\u1EDDi g\xE2y th\xEAm 50% s\xE1t th\u01B0\u01A1ng. Tung chi\xEAu ho\u1EB7c \u0111\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a tr\xFAng \u0111\u1ECBch gi\xFAp gi\u1EA3m h\u1ED3i t\u1EA5t c\u1EA3 c\xE1c chi\xEAu 1 gi\xE2y. Khi \u1EDF tr\u1EA1ng th\xE1i Quang minh, m\u1ED7i t\u1ED1c \u0111\xE1nh th\xEAm s\u1EBD gi\xFAp Edras t\u0103ng xuy\xEAn gi\xE1p; Khi \u1EDF tr\u1EA1ng th\xE1i H\u1EAFc \xE1m, m\u1ED7i c\xF4ng v\u1EADt l\xFD th\xEAm s\u1EBD gi\xFAp Edras t\u0103ng t\u1ED1c \u0111\xE1nh.Chi\xEAu 1 \u2013 Quang minh th\u1EA7n b\u1ED9: Edras t\u1EE5 l\u1EF1c trong tho\xE1ng ch\u1ED1c nh\u1EADn mi\u1EC5n kh\u1ED1ng v\xE0 mi\u1EC5n th\u01B0\u01A1ng. Sau khi t\u1EE5 l\u1EF1c ho\xE0n t\u1EA5t, Edras l\u01B0\u1EDBt \u0111i theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD k\xE8m m\xE1u \u0111\xE3 m\u1EA5t c\u1EE7a m\u1EE5c ti\xEAu th\xE0nh s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.Chi\xEAu 2 \u2013 Th\xE1nh quang th\u1EA7n tr\u1EA3m: Edras li\xEAn t\u1EE5c vung ki\u1EBFm ch\xE9m ra t\u1ED1i \u0111a 4 \u0111\u1EA1o ki\u1EBFm kh\xED l\xEAn k\u1EBB \u0111\u1ECBch theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, m\u1ED7i l\u1EA7n g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n.Chi\xEAu 3 \u2013 Th\xE1nh quang h\u1EE7y di\u1EC7t: Edras t\u1EE5 l\u1EF1c trong 3 gi\xE2y nh\u1EADn mi\u1EC5n kh\u1ED1ng, mi\u1EC5n th\u01B0\u01A1ng. Sau khi t\u1EE5 l\u1EF1c ho\xE0n t\u1EA5t, Edras vung ki\u1EBFm ph\xF3ng ra ba lu\u1ED3ng ki\u1EBFm kh\xED theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu. K\u1EC3 t\u1EEB l\u1EA7n th\u1EE9 hai tr\u1EDF \u0111i, ki\u1EBFm kh\xED \u0111\xE1nh tr\xFAng c\xF9ng m\u1ED9t m\u1EE5c ti\xEAu s\u1EBD ch\u1EC9 g\xE2y 30% s\xE1t th\u01B0\u01A1ng. T\u1EE5 l\u1EF1c 1 gi\xE2y sau \u0111\u1EA1t t\u1ED1i \u0111a s\xE1t th\u01B0\u01A1ng v\xE0 b\u1ECB \u0111\xE1nh ng\u1EAFt s\u1EBD \u0111\u01B0\u1EE3c tr\u1EA3 l\u1EA1i th\u1EDDi gian h\u1ED3i chi\xEAu. Khi tung ra ki\u1EBFm kh\xED v\u1EABn c\xF3 hi\u1EC7u \u1EE9ng mi\u1EC5n kh\u1ED1ng.Chi\xEAu 4 \u2013 H\u1EAFc \xE1m xu\u1EA5t th\u1EBF: Edras gi\u1EA3i ph\xF3ng s\u1EE9c m\u1EA1nh cu\u1ED3ng b\u1EA1o trong c\u01A1 th\u1EC3 v\xE0 \u0111\u1ED5i sang h\xECnh th\xE1i H\u1EAFc \xE1m v\xE0 qu\xE1 tr\xECnh n\xE0y kh\xF4ng th\u1EC3 b\u1ECB \u0111\xE1nh ng\u1EAFt.",
      s3: "H\xF3a th\xE2n H\u1EAFc \xE1m: Ngay kho\u1EA3nh kh\u1EAFc h\u1ECDc \u0111\u01B0\u1EE3c chi\xEAu 4, Edras k\xEDch ho\u1EA1t s\u1EE9c m\u1EA1nh b\xE1o th\xF9 cu\u1ED3ng n\u1ED9 v\xE0 chuy\u1EC3n sang h\xECnh th\xE1i H\u1EAFc \xE1m.D\u1EA1ng b\xE1n th\u1EA7n H\u1EAFc \xE1mN\u1ED9i t\u1EA1i \u2013 Ma kh\xED H\u1EAFc \xE1m: Sau khi Edras \u0111\xE1nh th\u01B0\u1EDDng, tinh th\u1EA7n h\u1EAFc \xE1m c\u0169ng s\u1EBD th\u1EF1c hi\u1EC7n th\xEAm m\u1ED9t \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng b\u1ED5 sung. Edras g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, tinh th\u1EA7n h\u1EAFc \xE1m c\u0169ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Khi \u1EDF tr\u1EA1ng th\xE1i n\xE0y, Edras \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y. Khi \u1EDF tr\u1EA1ng th\xE1i Quang minh, m\u1ED7i t\u1ED1c \u0111\xE1nh th\xEAm s\u1EBD gi\xFAp b\u1EA3n th\xE2n t\u0103ng xuy\xEAn gi\xE1p. Trong tr\u1EA1ng th\xE1i H\u1EAFc \xE1m, m\u1ED7i c\xF4ng v\u1EADt l\xFD th\xEAm gi\xFAp t\u0103ng t\u1ED1c \u0111\xE1nh.Chi\xEAu 1 \u2013 Kh\xE1t v\u1ECDng th\xF4n ph\u1EC7: Edras t\u1EE5 l\u1EF1c xung phong, x\xF3a l\xE0m ch\u1EADm b\u1EA3n th\xE2n v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y \u0111\u1ED3ng th\u1EDDi m\u1ED7i 0.5 gi\xE2y h\u1ED3i m\xE1u; su\u1ED1t th\u1EDDi gian t\u1EE5 l\u1EF1c \u0111\u1EC3 xung phong b\u1EA3n th\xE2n c\xF2n \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng. N\u1EBFu t\u1EE5 l\u1EF1c qu\xE1 1 gi\xE2y, Edras s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng th\xEAm t\u1ED1c \u0111\xE1nh trong 3 gi\xE2y \u0111\u1ED3ng th\u1EDDi t\u1ED1c ch\u1EA1y t\u1EE5 l\u1EF1c gi\u1EA3m d\u1EA7n trong v\xF2ng 2 gi\xE2y. M\u1ED7i l\u1EA7n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\u1ECBch \u0111\u1EC1u gi\xFAp gi\u1EA3m 1 gi\xE2y h\u1ED3i chi\xEAu.Chi\xEAu 2 \u2013 \xC1m d\u1EA1 cu\u1ED3ng tr\u1EA3m: Edras ch\xE9m ra lu\u1ED3ng ki\u1EBFm kh\xED theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm \u0111\u1ECBch trong 2 gi\xE2y \u0111\u1ED3ng th\u1EDDi khi\u1EBFn ch\xFAng ch\u1ECBu hi\u1EC7u \u1EE9ng x\xE9 to\u1EA1c. M\u1EE5c ti\xEAu c\xF3 hi\u1EC7u \u1EE9ng n\xE0y s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD t\u1EEB c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Edras. N\u1EBFu m\u1EE5c ti\xEAu l\xE0 t\u01B0\u1EDBng \u0111\u1ECBch, Edras s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i m\xE1u.Chi\xEAu 3 \u2013 H\u1ED7n mang h\u1EE7y di\u1EC7t: Edras ph\xF3ng ra m\u1ED9t ph\xE1p tr\u1EADn th\u1EA7n b\xED, tho\xE1ng ch\u1ED1c sau ph\xE1p tr\u1EADn s\u1EBD b\xF9ng n\u1ED5 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t tung nh\u1EEFng n\u1EA1n nh\xE2n trong ph\u1EA1m vi trong 0.75 gi\xE2y.Chi\xEAu 4 \u2013 Th\xE1nh quang xu\u1EA5t th\u1EBF: Edras \xE1p ch\u1EBF s\u1EE9c m\u1EA1nh h\u1EAFc \xE1m trong c\u01A1 th\u1EC3 v\xE0 \u0111\u1ED5i sang h\xECnh th\xE1i Quang minh, qu\xE1 tr\xECnh n\xE0y kh\xF4ng th\u1EC3 b\u1ECB \u0111\xE1nh ng\u1EAFt."
    },
    meta_data: {
      win_rate: 47.33,
      pick_rate: 6.12,
      ban_rate: 0.44
    },
    counters: [
      "Bijan",
      "Maloch",
      "Veres"
    ]
  },
  {
    id: "hero_199",
    name: "Eland'orr",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/199_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Tinh linh \u1EA5n: N\u1ED9i t\u1EA1i: Eland'orr \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD c\u1ED9ng d\u1ED3n \u1EA5n k\xFD l\xEAn m\u1EE5c ti\xEAu, \u0111\u1EE7 3 \u1EA5n k\xFD s\u1EBD b\xF9ng n\u1ED5 m\u1ED9t l\u1EA7n g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn c\xE1c k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi. Eland'orr sau khi tung chi\xEAu c\xF3 th\u1EC3 k\xEDch ho\u1EA1t l\u1EA1i \u0111\u1EC3 tr\u1EDF v\u1EC1 v\u1ECB tr\xED \u0111\xE8n tinh linh; khi kh\xF4ng c\u1EA7m \u0111\xE8n tinh linh Eland'orr \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y",
      s1: "Phi \u0111i\u1EC7p: Eland'orr l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, \u0111\xE8n tinh linh \u0111\u01B0\u1EE3c th\u1EE9c t\u1EC9nh v\u1EABn l\u01B0u t\u1EA1i ch\u1ED7 c\u0169",
      s2: "\u0110i\u1EC7p v\u0169: Eland'orr th\u1EE9c t\u1EC9nh \u0111\xE8n tinh linh khi\u1EBFn th\u1EE9 n\xE0y bi\u1EBFn th\xE0nh h\u1ED3 \u0111i\u1EC7p bay quanh b\u1EA3n th\xE2n v\xE0 t\u1EA1o 2 l\u1EA7n s\xE1t th\u01B0\u01A1ng l\xEAn m\u1EE5c ti\xEAu trong ph\u1EA1m vi, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn \u0111\u1ECBch trong ph\u1EA1m vi.",
      s3: "Ph\xE1 k\xE9n: Eland'orr th\u1EE9c t\u1EC9nh \u0111\xE8n tinh linh \u0111\u1EA9y l\xF9i k\u1EBB \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p sau \u0111\xF3 linh h\u1ED3n trong \u0111\xE8n ph\xE1 k\xE9n bay th\u1EB3ng ti\u1EBFp theo h\u01B0\u1EDBng \u0111\xE1nh"
    },
    meta_data: {
      win_rate: 48.28,
      pick_rate: 5.85,
      ban_rate: 0.04
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_196",
    name: "Elsu",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/196_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "B\u1EAFn t\u1EC9a: C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Elsu g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, tuy nhi\xEAn s\u1EBD kh\xF4ng th\u1EC3 g\xE2y ch\xED m\u1EA1ng.\xA0Thay v\xE0o \u0111\xF3, v\u1EDBi m\u1ED7i 1% ch\xED m\u1EA1ng Elsu s\u1EDF h\u1EEFu, anh s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng 3 c\xF4ng v\u1EADt l\xFD. N\u1ED9i t\u1EA1i:\xA0Khi r\u1EDDi kh\u1ECFi giao tranh 5 gi\xE2y\xA0v\xE0 \u0111\u1EE9ng g\u1EA7n \u0111\u1ECBa h\xECnh v\xE1ch n\xFAi, Elsu s\u1EBD ngu\u1EF5 trang\xA0trong th\u1EDDi gian ng\u1EAFn, gia t\u0103ng t\u1ED1c \u0111\u1ED9 di chuy\u1EC3n v\xE0 tr\u1EDF n\xEAn m\u1EDD nh\u1EA1t \u0111i",
      s1: "\u01AFng tr\u1EA1m: K\xEDch ho\u1EA1t:\xA0Elsu c\xE0i \u0111\u1EB7t m\u1ED9t thi\u1EBFt b\u1ECB \u01AFng tr\u1EA1m t\u1EA1i ch\u1ED7 gi\xFAp cung c\u1EA5p t\u1EA7m nh\xECn trong ph\u1EA1m vi 600 - 1000 kho\u1EA3ng c\xE1ch (t\u0103ng theo c\u1EA5p t\u01B0\u1EDBng). \u01AFng tr\u1EA1m t\u1ED3n t\u1EA1i trong 300 gi\xE2y, c\xF3 th\u1EC3 t\xEDch tr\u1EEF t\u1ED1i \u0111a 2 c\xE1i, v\xE0 \u0111\u1EB7t t\u1ED1i \u0111a 3 c\xE1i tr\xEAn b\u1EA3n \u0111\u1ED3. Khi \u0111\u1EE9ng trong ph\u1EA1m vi c\u1EE7a \u01AFng tr\u1EA1m, Elsu \u0111\u01B0\u1EE3c t\u0103ng th\xEAm s\xE1t th\u01B0\u01A1ng m\u1ED7i \u0111\xF2n b\u1EAFn l\xEAn qu\xE1i r\u1EEBng (t\u1ED1i \u0111a 250), nh\u01B0ng s\u1EBD b\u1ECB v\xF4 hi\u1EC7u ho\xE1 khi t\u01B0\u1EDBng \u0111\u1ECBch gi\u1EABm l\xEAn.N\u1ED9i t\u1EA1i: \u0110\u1EE9ng t\u1EA1i ch\u1ED7 m\u1ED7i gi\xE2y gi\xFAp Elsu t\u0103ng xuy\xEAn gi\xE1p (t\u0103ng theo c\u1EA5p t\u01B0\u1EDBng), t\u1ED1i \u0111a c\u1ED9ng d\u1ED3n 5 l\u1EA7n. N\u1EBFu Elsu di chuy\u1EC3n s\u1EBD kh\xF4ng \u0111\u01B0\u1EE3c l\xE0m m\u1EDBi n\u1ED9i t\u1EA1i n\u1EEFa.",
      s2: "Vi\u1EC5n tr\xECnh k\xEDch: Elsu nh\u1EAFm b\u1EAFn g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD k\xE8m l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y l\xEAn t\u01B0\u1EDBng \u0111\u1EA7u ti\xEAn tr\xFAng ph\u1EA3i. Elsu c\u1EA7n ng\u1EAFm b\u1EAFn trong 2 gi\xE2y \u0111\u1EC3 gia t\u0103ng kho\u1EA3ng c\xE1ch v\xE0 \u0111\u1ED9 ch\xEDnh x\xE1c.",
      s3: "Gi\u1EADt b\u1EAFn: Elsu l\u1ED9n ra ph\xEDa sau r\u1ED3i l\u1EADp t\u1EE9c b\u1EAFn v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n. Khi \u0111\xE1p \u0111\u1EA5t Elsu \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y trong 2 gi\xE2y, nh\u01B0ng n\u1EBFu tung chi\xEAu ho\u1EB7c \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD l\u1EADp t\u1EE9c gi\u1EA3i tr\u1EEB hi\u1EC7u \u1EE9ng n\xE0y"
    },
    meta_data: {
      win_rate: 51.1,
      pick_rate: 21.42,
      ban_rate: 30.45
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_195",
    name: "Enzo",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/195_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "T\xEDn ni\u1EC7m: Enzo ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i T\xEDn ni\u1EC7m, \u0111\u01B0\u1EE3c t\u0103ng ph\xFAc n\u0103ng l\u1EF1c th\u1EA7n th\xE1nh l\xEAn v\u0169 kh\xED, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn \u0111\u1ECBch \u1EDF g\u1EA7n. \u0110\xE1nh xa g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng, \u0111\xE1nh tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp b\u1EA3n th\xE2n t\u0103ng t\u1ED1c ch\u1EA1y (hi\u1EC7u qu\u1EA3 ph\u1EE5 thu\u1ED9c v\xE0o Truy b\u1EE9c).",
      s1: "Truy b\u1EE9c: Enzo l\u01B0\u1EDBt nhanh v\xE0 \u0111\u01B0\u1EE3c t\u0103ng c\xF4ng v\u1EADt l\xFD. N\u1EBFu \u0111\xE1nh tr\xFAng \u0111\u1ECBch \u1EDF xa s\u1EBD l\xE0m ch\u1EADm \u0111\u1ECBch v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y cho b\u1EA3n th\xE2n. N\u1EBFu k\xEDch ho\u1EA1t C\xE2u h\u1ED3n, Truy b\u1EE9c khi\u1EBFn m\u1EE5c ti\xEAu ch\u1ECBu C\xE2u h\u1ED3n b\u1ECB k\xE9o theo m\u1ED9t \u0111o\u1EA1n nh\u1ECF theo h\u01B0\u1EDBng Enzo di chuy\u1EC3n",
      s2: "C\xE2u h\u1ED3n: Enzo t\u1EE5 l\u1EF1c r\u1ED3i tung theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi tr\xF3i bu\u1ED9c k\u1EBB \u0111\u1ECBch th\u1EE9 nh\u1EA5t khi t\u1ECFa li\xEAm quay v\u1EC1 v\xE0 g\xE2y hi\u1EC7u \u1EE9ng C\xE2u h\u1ED3n; t\u1EE5 l\u1EF1c c\xE0ng l\xE2u t\u1ECFa li\xEAm bay c\xE0ng xa.Khi t\u1EE5 l\u1EF1c \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y, h\u1EE7y t\u1EE5 l\u1EF1c khi\u1EBFn C\xE2u h\u1ED3n gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu; khi C\xE2u h\u1ED3n \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t, Enzo c\xF3 th\u1EC3 ti\u1EBFp t\u1EE5c d\xF9ng chi\xEAu n\xE0y k\xE9o \u0111\u1ECBch v\u1EC1 sau \u0111\u1ED3ng th\u1EDDi x\xF3a hi\u1EC7u \u1EE9ng C\xE2u h\u1ED3n.  D\u01B0\u1EDBi tr\u1EA1ng th\xE1i C\xE2u h\u1ED3n, Enzo \u0111\u01B0\u1EE3c t\u0103ng s\xE1t th\u01B0\u01A1ng v\xE0 gi\u1EA3m s\xE1t th\u01B0\u01A1ng ph\u1EA3i ch\u1ECBu t\u1EEB t\u01B0\u1EDBng \u0111\u1ECBch \u0111ang \u0111\xE1nh; n\u1EBFu k\u1EBB \u0111\u1ECBch t\u1EED vong, C\xE2u h\u1ED3n gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu.",
      s3: "H\xE0nh quy\u1EBFt: Enzo l\u01B0\u1EDBt c\u1EF1c nhanh theo t\u1ECFa li\xEAm hi\u1EC7n ph\xEDa sau l\u01B0ng \u0111\u1ECBch b\u1ECB d\xEDnh C\xE2u h\u1ED3n, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn c\xE1c m\u1EE5c ti\xEAu tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt; trong qu\xE1 tr\xECnh l\u01B0\u1EDBt Enzo \u0111\u01B0\u1EE3c mi\u1EC5n th\u01B0\u01A1ng; H\xE0nh quy\u1EBFt ch\u1EC9 c\xF3 th\u1EC3 d\xF9ng khi m\u1EE5c ti\xEAu b\u1ECB d\xEDnh C\xE2u h\u1ED3n.N\u1ED9i t\u1EA1i: Enzo di\u1EC7t ho\u1EB7c ph\u1EE5 di\u1EC7t t\u01B0\u1EDBng \u0111\u1ECBch \u0111\u1EC1u k\xEDch ho\u1EA1t tr\u1EA1ng th\xE1i m\xE1y ch\xE9m t\u0103ng t\u1ED1c ch\u1EA1y, t\u1ED1c \u0111\xE1nh."
    },
    meta_data: {
      win_rate: 49.84,
      pick_rate: 13.06,
      ban_rate: 16.48
    },
    counters: [
      "Aoi",
      "Wukong",
      "Bright"
    ]
  },
  {
    id: "hero_567",
    name: "Erin",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/567_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Di\u1EC7p v\u0169 tinh linh: N\u1ED9i t\u1EA1i: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Erin tr\xFAng k\u1EBB \u0111\u1ECBch s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 gi\xFAp b\u1EA3n th\xE2n nh\u1EADn \u0111\u01B0\u1EE3c n\u0103ng l\u01B0\u1EE3ng. Sau khi \u0111\u1EA7y n\u0103ng l\u01B0\u1EE3ng, c\xF4 n\xE0ng s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c b\u1EA5t ng\u1EDD v\xE0 c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF. Kh\u1EA3 n\u0103ng xuy\xEAn song gi\xE1p/h\xFAt m\xE1u c\u1EE7a Erin l\xE0 to\xE0n n\u0103ng, t\xF9y theo m\u1EE9c \u0111\u1ED9 xuy\xEAn gi\xE1p/h\xFAt m\xE1u ho\u1EB7c xuy\xEAn gi\xE1p ph\xE9p/h\xFAt m\xE1u ph\xE9p c\xE1i n\xE0o l\u1EDBn h\u01A1n",
      s1: "Di\u1EC7p v\u0169 kim quang: Erin b\u1EAFn ra m\u0169i t\xEAn kim di\u1EC7p g\xE2y s\xE1t th\u01B0\u01A1ng cho m\u1EE5c ti\xEAu \u0111\u1EA7u ti\xEAn v\xE0 c\u1ED9ng d\u1ED3n 1 d\u1EA5u \u1EA5n nguy\u1EC7t qu\u1EBF. Ngo\xE0i ra sau khi b\u1EAFn tr\xFAng m\u1EE5c ti\xEAu l\xE0 t\u01B0\u1EDBng \u0111\u1ECBch ho\u1EB7c bay \u0111\u1EBFn n\u01A1i xa nh\u1EA5t, m\u0169i t\xEAn s\u1EBD n\u1ED5 th\xE0nh ph\xE1p tr\u1EADn g\xE2y ti\u1EBFp s\xE1t th\u01B0\u01A1ng cho k\u1EBB \u0111\u1ECBch ch\u1EA1m ph\u1EA3i v\xE0 l\xE0m ch\u1EADm ch\xFAng",
      s2: "Di\u1EC7p v\u0169 h\u1ED3 \u0111i\u1EC7p: Erin nh\u1EADn \u0111\u01B0\u1EE3c ch\xFAc ph\xFAc ho\xE0ng kim l\u1EADp t\u1EE9c h\u1ED3i \u0111\u1EA7y n\u0103ng l\u01B0\u1EE3ng v\xE0 c\u1ED9ng d\u1ED3n d\u1EA5u \u1EA5n nguy\u1EC7t qu\u1EBF gi\xFAp b\u1EA3n th\xE2n mi\u1EC5n l\xE0m ch\u1EADm \u0111\u1ED3ng th\u1EDDi t\u0103ng t\u1ED1c \u0111\xE1nh",
      s3: "Di\u1EC7p v\u0169 nguy\u1EC7t qu\u1EBF: Khi \u0111\u1EA7y n\u0103ng l\u01B0\u1EE3ng, Erin s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c 1 d\u1EA5u \u1EA5n nguy\u1EC7t qu\u1EBF. Khi \u0111\u1EA1t 6 d\u1EA5u \u1EA5n, c\xF4 s\u1EBD \u0111\u01B0\u1EE3c m\u1EDF kh\xF3a chi\xEAu cu\u1ED1i gi\xFAp t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 li\xEAn t\u1EE5c b\u1EAFn ra kim di\u1EC7p g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn k\u1EBB \u0111\u1ECBch \xEDt m\xE1u nh\u1EA5t l\xE2n c\u1EADn \u0111\u1ED3ng th\u1EDDi ti\xEAu hao c\xE1c d\u1EA5u \u1EA5n c\xF9ng v\u1EDBi gi\u1EA3m h\u1ED3i chi\xEAu 2."
    },
    meta_data: {
      win_rate: 47.67,
      pick_rate: 1.41,
      ban_rate: 0.02
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_522",
    name: "Errol",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/522_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Tay \xE1c ma: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\xEDch gi\xFAp Errol t\u0103ng 1 \u0111i\u1EC3m Qu\u1EF7 tr\u1EA3o, nhi\u1EC1u nh\u1EA5t 5 \u0111i\u1EC3m, gi\xFAp t\u0103ng t\u1ED1c ch\u1EA1y, t\u1ED1c \u0111\xE1nh, h\xFAt m\xE1u, nh\u01B0ng gi\u1EA3m kh\xE1ng ph\xE9p v\xE0 v\u1EADt l\xFD. Qu\u1EF7 tr\u1EA3o k\xE9o d\xE0i 5 gi\xE2y.  M\u1ED7i 3 l\u1EA7n c\xF4ng th\u01B0\u1EDDng tay ph\u1EA3i s\u1EBD chuy\u1EC3n th\xE0nh tay \xE1c ma \u0111\u1ED9t k\xEDch.",
      s1: "Tay l\u01B0\u1EE1i li\u1EC1m: Errol l\u01B0\u1EDBt ph\xEDa tr\u01B0\u1EDBc vung tay l\u01B0\u1EE1i li\u1EC1m qu\xE9t ngang k\u1EBB \u0111\u1ECBch, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0  Trong qu\xE1 tr\xECnh l\u01B0\u1EDBt tr\xFAng g\u1EB7p \u0111\u1ECBch s\u1EBD khi\u1EBFn \u0111\u1ECBch b\u1ECB \u0111\u1ECBnh th\xE2n, \u0111\u1ED3ng th\u1EDDi Errol thu\u1EA5n di c\u1EA1nh k\u1EBB \u0111\u1ECBch v\xE0 tung Tay l\u01B0\u1EE1i li\u1EC1m ch\xE9m ngang \u0111\u1ECBch, gi\u1EA3m h\u1ED3i chi\xEAu v\xE0 h\u1ED3i 1 ph\u1EA7n m\xE1u \u0111\xE3 m\u1EA5t",
      s2: "Tay \u0111\u1EA1i \u0111ao: Tay ph\u1EA3i h\xF3a th\xE0nh \u0111\u1EA1i \u0111ao, ch\xE9m xu\u1ED1ng nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng th\u1EB3ng g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 l\xE0m ch\u1EADm, k\xE9o d\xE0i 1\xA0gi\xE2y. Tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch h\u1ED3i cho b\u1EA3n th\xE2n 1 ph\u1EA7n m\xE1u \u0111\xE3 m\u1EA5t. N\u1EBFu \u0111ang \u0111\u1EA7y \u0111i\u1EC3m Qu\u1EF7 tr\u1EA3o s\u1EBD ti\xEAu hao h\u1EBFt \u0111i\u1EC3m \u0111\u1EC3 g\xE2y s\xE1t th\u01B0\u01A1ng nh\xE2n \u0111\xF4i, h\xFAt m\xE1u g\u1EA5p \u0111\xF4i\xA0v\xE0 \u0111\xE1nh bay k\u1EBB \u0111\u1ECBch.",
      s3: "M\u1EAFt ma: Errol ph\xF3ng l\xEAn kh\xF4ng trung v\xE0 tr\u1EDF n\xEAn b\u1EA5t t\u1EED trong 2 gi\xE2y, su\u1ED1t th\u1EDDi gian n\xE0y h\u1EAFn c\xF3 th\u1EC3 t\u1EF1 do ch\u1ECDn \u0111i\u1EC3m r\u01A1i. Khi k\u1EBFt th\xFAc, Errol h\xF3a th\xE0nh v\xF2ng xo\xE1y xuy\xEAn th\u1EE7ng m\u1EB7t \u0111\u1EA5t g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t tung\xA0\u0111\u1ECBch."
    },
    meta_data: {
      win_rate: 46.45,
      pick_rate: 5.33,
      ban_rate: 0.04
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_173",
    name: "Fennik",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/173_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "N\xE1 thun: N\u1ED9i t\u1EA1i:\xA0Fennik c\xF3 th\u1EC3 l\u1EAFng nghe c\xE1c chuy\u1EC3n \u0111\u1ED9ng xung quanh, truy t\xECm v\xE0 b\u1EAFt d\u1EA5u v\u1EBFt c\u1EE7a k\u1EBB \u0111\u1ECBch, khi\u1EBFn ch\xFAng l\u1ED9 di\u1EC7n trong 1 gi\xE2y v\xE0 c\xF3 hi\u1EC7u l\u1EF1c sau m\u1ED7i 6 gi\xE2y tr\xEAn c\xF9ng 1 \u0111\u01A1n v\u1ECB.",
      s1: 'K\xEDp n\u1ED5: "Fennik \u0111\xE1nh d\u1EA5u k\xEDp n\u1ED5 l\xEAn k\u1EBB \u0111\u1ECBch ho\u1EB7c c\xF4ng tr\xECnh v\xE0 4 gi\xE2y sau s\u1EBD ph\xE1t n\u1ED5 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. N\u1EBFu \u0111\xE1nh th\u01B0\u1EDDng t\xEDch \u0111\u1EE7 4 k\xEDp n\u1ED5 c\u0169ng s\u1EBD k\xEDch n\u1ED5 tr\u01B0\u1EDBc th\u1EDDi h\u1EA1n.Khi tung chi\xEAu, Fennik c\xF3 th\u1EC3 l\u01B0\u1EDBt th\xEAm m\u1ED9t \u0111o\u1EA1n (kh\xF4ng xuy\xEAn t\u01B0\u1EDDng), nh\u1EADn t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 t\u1EA7m \u0111\xE1nh trong 4 gi\xE2y ti\u1EBFp theo. C\xF3 th\u1EC3 ng\u1EAFt nh\u1EA3y n\u1EBFu nh\u01B0 d\xF9ng chi\xEAu 2 ho\u1EB7c chi\xEAu cu\u1ED1i."',
      s2: "N\u1EB9t \u0111i\u1EC7n: Fennik l\u1ED9n v\u1EC1 tr\u01B0\u1EDBc ch\u1EA1m v\xE0o d\u1ECBch (kh\xF4ng b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu) v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD k\xE8m l\xE0m ch\u1EADm n\u1EA1n nh\xE2n. Ngo\xE0i ra, h\u1EAFn c\xF2n \u0111\u1EC3 l\u1EA1i 1 v\u1EC7t \u0111i\u1EC7n t\xEDch trong 1 th\u1EDDi gian, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm n\u1EA1n nh\xE2n tr\xFAng ph\u1EA3i.",
      s3: 'L\u1ED1c si\xEAu thanh: "Fennik n\xE9m v\u0169 kh\xED \u0111\u1EBFn n\u01A1i ch\u1EC9 \u0111\u1ECBnh t\u1EA1o ra c\u01A1n b\xE3o si\xEAu thanh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. B\xE3o n\xE0y t\u1ED3n t\u1EA1i 1 th\u1EDDi gian, m\u1ED7i 0.5 gi\xE2y g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, l\xE0m ch\u1EADm v\xE0 t\xEDch l\u0169y k\xEDp n\u1ED5 l\xEAn ng\u01B0\u1EDDi n\u1EA1n nh\xE2n trong ph\u1EA1m vi.S\xE1t th\u01B0\u01A1ng v\xF9ng trung t\xE2m b\xE3o s\u1EBD t\u0103ng g\u1EA5p \u0111\xF4i so v\u1EDBi v\xF9ng ngo\xE0i."'
    },
    meta_data: {
      win_rate: 51.63,
      pick_rate: 11.99,
      ban_rate: 0.15
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_521",
    name: "Florentino",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/521_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Xu\u1EA5t ch\xFAng: \u0110\u1ED9t k\xEDch: Florentino khi r\u1EDDi giao tranh s\u1EBD khi\u1EBFn \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp l\u01B0\u1EDBt t\u1EDBi k\u1EBB \u0111\u1ECBch, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y k\u1EBB \u0111\u1ECBch. \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng ti\u1EBFp theo \u0111\xF3 s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng s\xE1t th\u01B0\u01A1ng. \u0110\u1ED9t k\xEDch tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp Florentino h\u1ED3i m\xE1u.Ki\u1EBFm b\u1ED9: Sau khi tung \u0110\u1ED9t k\xEDch, Florentino s\u1EBD l\u01B0\u1EDBt m\u1ED9t \u0111o\u1EA1n ng\u1EAFn, mi\u1EC5n nhi\u1EC5m m\u1ECDi hi\u1EC7u \u1EE9ng kh\u1ED1ng ch\u1EBF. L\u01B0\u1EDBt xong Florentino \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y.",
      s1: "H\xE0o hoa: Florentino ph\xF3ng hoa v\xE0o k\u1EBB \u0111\u1ECBch, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, l\xE0m cho\xE1ng \u0111\u1ECBch. D\xF9ng tr\xFAng \u0111\u1ECBch s\u1EBD t\u1EA1o ra ba \u0111o\xE1 hoa trong 5 gi\xE2y. Nh\u1EB7t hoa s\u1EBD gi\xFAp Florentino h\u1ED3i 100 n\u1ED9i n\u0103ng, \u0111\u1ED3ng th\u1EDDi khi\u1EBFn \u0111\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp \u0110\u1ED9t k\xEDch v\xE0 ho\xE0n l\u1EA1i h\u1ED3i chi\xEAu c\u1EE7a Th\u01B0\u1EDFng hoa.",
      s2: "Th\u01B0\u1EDFng hoa: Florentino tung ba nh\xE1t ki\u1EBFm x\u1EA3o di\u1EC7u l\xEAn k\u1EBB \u0111\u1ECBch, m\u1ED7i l\u1EA7n g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n b\u1EB1ng 1 ph\u1EA7n m\xE1u t\u1ED1i \u0111a k\u1EBB \u0111\u1ECBch. Khi k\u1EBFt th\xFAc chi\xEAu c\xF3 th\u1EC3 tung Ki\u1EBFm b\u1ED9, n\u1EBFu tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD gi\u1EA3m 1 gi\xE2y h\u1ED3i chi\xEAu.H\xE0o hoa Th\u01B0\u1EDFng hoa: G\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFDH\u1ED9 hoa: G\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t tungKhai hoa: tung ki\u1EBFm hai l\u1EA7n g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD m\u1ED7i ki\u1EBFm",
      s3: "T\xE0i hoa: Florentino l\u01B0\u1EDBt \u0111\u1EBFn ph\xEDa tr\u01B0\u1EDBc, Quy\u1EBFt \u0111\u1EA5u v\u1EDBi t\u01B0\u1EDBng \u0111\u1EA7u ti\xEAn tr\xFAng chi\xEAu. Trong 5 gi\xE2y k\u1EBF ti\u1EBFp, Florentino g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng l\xEAn m\u1EE5c ti\xEAu, \u0111\u1ED3ng th\u1EDDi gi\u1EA3m gi\xE1p k\u1EBB \u0111\xF3. Su\u1ED1t th\u1EDDi gian n\xE0y, Florentino mi\u1EC5n nhi\u1EC5m m\u1ECDi kh\u1ED1ng ch\u1EBF v\xE0 mi\u1EC5n s\xE1t th\u01B0\u01A1ng t\u1EEB nh\u1EEFng k\u1EBB \u0111\u1ECBch kh\xF4ng b\u1ECB Quy\u1EBFt \u0111\u1EA5u. N\u1EBFu h\u1EA1 g\u1EE5c m\u1EE5c ti\xEAu, Florentino nh\u1EADn c\xF4ng v\u1EADt l\xFD v\u0129nh vi\u1EC5n, c\u1ED9ng d\u1ED3n 10 l\u1EA7n."
    },
    meta_data: {
      win_rate: 50.61,
      pick_rate: 21.25,
      ban_rate: 13.55
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_108",
    name: "Gildur",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/108_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'B\xE0n tay v\xE0ng: "N\u1ED9i t\u1EA1i: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng th\u1EE9 t\u01B0 li\xEAn ti\u1EBFp \u0111\u1EA9y l\xF9i m\u1EE5c ti\xEAu ph\xEDa tr\u01B0\u1EDBc v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.\u0110\u1ED3ng th\u1EDDi, Guldur s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c l\xE1 ch\u1EAFn."',
      s1: 'Qu\u1EA3 \u0111\u1EA5m v\xE0ng: "Gildur x\xF4ng t\u1EDBi v\u1EDBi c\xFA \u0111\u1EA5m ho\xE0ng kim g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu.\u0110\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp c\u1EE7a Gildur s\u1EBD k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i B\xE0n tay v\xE0ng."',
      s2: "V\u1EE5 n\u1ED5 v\xE0ng: Gildur n\xE9m v\xE0ng l\xE0m cho\xE1ng v\xE0 g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch trong t\u1EA7m chi\xEAu.",
      s3: 'V\u01B0\u01A1ng qu\u1ED1c v\xE0ng: "Gildur li\xEAn t\u1EE5c c\xF4ng k\xEDch l\xE0m cho\xE1ng v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu.Chi\xEAu th\u1EE9c n\xE0y c\u1EA7n \u0111\u1EE9ng y\xEAn ni\u1EC7m ch\xFA. Sau 1 gi\xE2y n\u1EBFu d\xF9ng chi\xEAu th\u1EE9c kh\xE1c ho\u1EB7c di chuy\u1EC3n s\u1EBD g\xE2y h\u1EE7y chi\xEAu."'
    },
    meta_data: {
      win_rate: 56,
      pick_rate: 39.9,
      ban_rate: 5.06
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_596",
    name: "Goverra",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/305960head.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Binh \u0111o\xE0n thi\u1EBFt v\u1EC7: M\u1ED7i khi Goverra h\u1EA1 g\u1EE5c m\u1ED9t k\u1EBB \u0111\u1ECBch, c\xF4 s\u1EBD tri\u1EC7u h\u1ED3i m\u1ED9t Thi\u1EBFt v\u1EC7 v\xE0 n\xF3 s\u1EBD t\u1EF1 \u0111\u1ED9ng t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn. Khi th\u1EDDi gian t\u1ED3n t\u1EA1i k\u1EBFt th\xFAc, Thi\u1EBFt v\u1EC7 s\u1EBD t\xECm m\u1ED9t Thi\u1EBFt v\u1EC7 c\xF9ng c\u1EA5p g\u1EA7n \u0111\xF3 \u0111\u1EC3 h\u1EE3p th\u1EC3 v\xE0 th\u0103ng c\u1EA5p (t\u1ED1i \u0111a th\u0103ng l\xEAn c\u1EA5p 3). N\u1EBFu kh\xF4ng c\xF3 Thi\u1EBFt v\u1EC7 \u0111\u1EC3 h\u1EE3p th\u1EC3, n\xF3 s\u1EBD t\u1EF1 h\u1EE7y v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn c\xE1c k\u1EBB \u0111\u1ECBch xung quanh (b\xE1n k\xEDnh v\u1EE5 n\u1ED5 t\u0103ng theo c\u1EA5p c\u1EE7a Thi\u1EBFt v\u1EC7).T\u1ED1i \u0111a c\xF3 th\u1EC3 t\u1ED3n t\u1EA1i 4 / 2 / 1 Thi\u1EBFt v\u1EC7 (gi\u1EA3m s\u1ED1 l\u01B0\u1EE3ng theo c\u1EA5p \u0111\u1ED9 Thi\u1EBFt v\u1EC7). Khi v\u01B0\u1EE3t qu\xE1 gi\u1EDBi h\u1EA1n, c\xE1c Thi\u1EBFt v\u1EC7 c\u0169 h\u01A1n s\u1EBD c\u1ED1 g\u1EAFng h\u1EE3p th\u1EC3 ho\u1EB7c t\u1EF1 h\u1EE7y.",
      s1: "Ti\xEAm k\xEDch tu\u1EA7n h\xE0nh: Goverra ch\u1EC9 huy m\xE1y bay ti\xEAm k\xEDch t\u1EA5n c\xF4ng c\xE1c k\u1EBB \u0111\u1ECBch d\u1ECDc \u0111\u01B0\u1EDDng, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Sau 2 l\u1EA7n t\u1EA5n c\xF4ng, l\u1EA7n th\u1EE9 ba s\u1EBD g\xE2y ti\u1EBFp s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn m\u1EE5c ti\xEAu.T\xE1i k\xEDch ho\u1EA1t chi\xEAu th\u1EE9c s\u1EBD khi\u1EBFn m\xE1y bay ti\xEAm k\xEDch chia l\xE0m 2 m\xE1y bay n\xE9m bom nh\u1ECF ti\u1EBFp t\u1EE5c t\u1EA5n c\xF4ng trong ph\u1EA1m vi. N\u1EBFu k\u1EBB \u0111\u1ECBch b\u1ECB c\u1EA3 2 m\xE1y bay nh\u1ECF n\xE9m bom tr\xFAng \u0111\xEDch, h\u1EAFn s\u1EBD b\u1ECB l\xE0m ch\u1EADm",
      s2: "M\u1EC7nh l\u1EC7nh t\u1EADp k\xEDch: Goverra tri\u1EC7u h\u1ED3i Binh \u0111o\xE0n thi\u1EBFt v\u1EC7 t\u1EA1i v\xF9ng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Sau 1 gi\xE2y, Thi\u1EBFt v\u1EC7 s\u1EBD t\u1EF1 \u0111\u1ED9ng t\u1EA5n c\xF4ng m\u1EE5c ti\xEAu \u0111\u1ED1i \u0111\u1ECBch trong ph\u1EA1m vi.M\u1ED7i 15 \u2013 12 gi\xE2y, Goverra s\u1EBD d\u1EF1 tr\u1EEF th\xEAm m\u1ED9t \u0111\u1EE3t th\u1EA3 Thi\u1EBFt v\u1EC7, t\u1ED1i \u0111a d\u1EF1 tr\u1EEF 3 l\u1EA7n (\u1EA3nh h\u01B0\u1EDFng b\u1EDFi c\u01A1 ch\u1EBF gi\u1EA3m h\u1ED3i chi\xEAu).",
      s3: "T\xEDn hi\u1EC7u h\u1EE7y di\u1EC7t: Goverra ph\xF3ng m\u1ED9t thi\u1EBFt b\u1ECB t\xEDn hi\u1EC7u v\u1EC1 ph\xEDa m\u1EE5c ti\xEAu ch\u1EC9 \u0111\u1ECBnh, g\xE2y cho\xE1ng v\xE0 \u0111\xE1nh d\u1EA5u m\u1EE5c ti\xEAu. Trong th\u1EDDi gian b\u1ECB \u0111\xE1nh d\u1EA5u, c\u1EE9 m\u1ED7i 0,5 gi\xE2y m\u1EE5c ti\xEAu s\u1EBD ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 b\u1ECB l\xE0m ch\u1EADm. Khi th\u1EDDi gian \u0111\xE1nh d\u1EA5u k\u1EBFt th\xFAc, thi\u1EBFt b\u1ECB s\u1EBD ph\xE1t n\u1ED5 v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.Khi k\xEDch ho\u1EA1t chi\xEAu cu\u1ED1i, c\xE1c Thi\u1EBFt v\u1EC7 trong khu v\u1EF1c s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 t\u1ED1c ch\u1EA1y, \u0111\u1ED3ng th\u1EDDi l\u1EADp t\u1EE9c lao v\xE0o t\u1EA5n c\xF4ng m\u1EE5c ti\xEAu.N\u1EBFu m\u1EE5c ti\xEAu l\xE0 t\u01B0\u1EDBng \u0111\u1ECBch c\xF3 d\u1EA5u \u1EA5n v\xE0 b\u1ECB h\u1EA1 g\u1EE5c trong th\u1EDDi gian hi\u1EC7u l\u1EF1c, Goverra s\u1EBD l\u1EADp t\u1EE9c \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ED9ng tri\u1EC7u h\u1ED3i 3 Thi\u1EBFt v\u1EC7.Thi\u1EBFt b\u1ECB t\xEDn hi\u1EC7u c\xF3 th\u1EC3 \u0111\xE1nh d\u1EA5u l\xEAn c\xF4ng tr\xECnh nh\u01B0ng s\u1EBD kh\xF4ng g\xE2y cho\xE1ng."
    },
    meta_data: {
      win_rate: 51.83,
      pick_rate: 12.19,
      ban_rate: 20.37
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_175",
    name: "Grakk",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/175_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Huy\u1EBFt T\u1EBF: "N\u1ED9i t\u1EA1i: Khi ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\u01B0\u1EE3t qu\xE1 10% l\u01B0\u1EE3ng m\xE1u hi\u1EC7n t\u1EA1i s\u1EBD b\xF9ng n\u1ED5 (2 gi\xE2y h\u1ED3i chi\xEAu ), g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi 500m xung quanh.Sau 3 gi\xE2y khi Grakk t\u1EED vong, t\u1EA1i v\u1ECB tr\xED b\u1ECB ti\xEAu di\u1EC7t s\u1EBD b\xF9ng n\u1ED5 g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi 5m xung quanh."',
      s1: "C\xE0n Qu\xE9t: Grakk nh\u01B0 h\xF3a th\xE0nh \u0111\u1ED9ng kh\xF4ng \u0111\xE1y, h\xFAt t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn v\xE0o c\u1EA1nh b\xEAn, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0v\xE0 l\xE0m ch\u1EADm 30% t\u1ED1c ch\u1EA1y c\u1EE7a nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu. C\xE1c n\u1EA1n nh\xE2n l\xE2n c\u1EADn Grakk s\u1EBD ch\u1ECBu g\u1EA5p \u0111\xF4i s\xE1t th\u01B0\u01A1ng v\xE0 hi\u1EC7u \u1EE9ng l\xE0m ch\u1EADm, c\u0169ng nh\u01B0 c\xE2m l\u1EB7ng 0.5 gi\xE2y",
      s2: 'X\xEDch Ma Qu\xE1i: "Grakk tung d\xE2y kh\xF3a k\xE9o \u0111\u1ECBch \u0111\u1EBFn tr\u01B0\u1EDBc m\u1EB7t, v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.N\u1ED9i t\u1EA1i: M\u1ED7i l\u1EA7n Grakk ti\xEAu di\u1EC7t ho\u1EB7c h\u1ED7 tr\u1EE3 s\u1EBD t\u0103ng m\xE1u b\u1EA3n th\xE2n th\xEAm 125, t\u1ED1i \u0111a c\u1ED9ng d\u1ED3n 20 l\u1EA7n."',
      s3: "Nu\u1ED1t Ch\u1EEDng: Sau tho\xE1ng ch\u1ED1c, Grakk li\xEAn t\u1EE5c l\xE0m cho\xE1ng v\xE0 h\xFAt k\u1EBB \u0111\u1ECBch tr\u01B0\u1EDBc m\u1EB7t, s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0trong 3 gi\xE2y. \u0110\u1ED3ng th\u1EDDi, Grakk s\u1EBD t\u1EF1 t\u1EA1o m\u1ED9t l\xE1 ch\u1EAFn gi\xE1 tr\u1ECB t\u01B0\u01A1ng \u0111\u01B0\u01A1ng\xA0l\xEAn b\u1EA3n th\xE2n n\u1EBFu chi\xEAu tr\xFAng \u0111\u1ECBch."
    },
    meta_data: {
      win_rate: 48.24,
      pick_rate: 13.45,
      ban_rate: 24.33
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_132",
    name: "Hayate",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/132_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ph\u1EA3n \u1EE9ng d\xE2y chuy\u1EC1n: N\u1ED9i t\u1EA1i: C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\xEDch khi\u1EBFn m\u1ED9t n\u1EA1n nh\xE2n l\xE2n c\u1EADn m\u1EE5c ti\xEAu ch\xEDnh ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, b\xF9 l\u1EA1i Hayate g\xE2y gi\u1EA3m s\xE1t th\u01B0\u01A1ng l\xEAn qu\xE1i r\u1EEBng (t\u0103ng d\u1EA7n l\u1EA1i theo c\u1EA5p t\u01B0\u1EDBng). \u0110\u1EB7c bi\u1EC7t sau 6 l\u1EA7n c\xF4ng k\xEDch (t\xEDnh c\u1EA3 \u0111\xE1nh th\u01B0\u1EDDng l\u1EABn chi\xEAu th\u1EE9c) tr\xFAng \u0111\xEDch c\xF9ng m\u1EE5c ti\xEAu, Hayate s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i n\u1ED9i n\u0103ng, \u0111\u1ED3ng th\u1EDDi khi\u1EBFn c\xE1c \u0111\u1EE3t t\u1EA5n c\xF4ng trong v\xF2ng 4 gi\xE2y k\u1EBF g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n l\xEAn n\u1EA1n nh\xE2n.",
      s1: "Chu\u1ED7i phi ti\xEAu: Hayate li\xEAn t\u1EE5c ph\xF3ng phi ti\xEAu v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y su\u1ED1t th\u1EDDi gian n\xE0y; m\u1ED7i phi ti\xEAu g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i. \u0110\u1EB7c bi\u1EC7t phi ti\xEAu c\xF3 th\u1EC3 xuy\xEAn th\u1EA5u c\xE1c \u0111\u01A1n v\u1ECB kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng, b\xF9 l\u1EA1i g\xE2y gi\u1EA3ms\xE1t th\u01B0\u01A1ng sau m\u1ED7i \u0111\u01A1n v\u1ECB xuy\xEAn qua.",
      s2: "\u1EA2nh bi\u1EBFn: Hayate l\u01B0\u1EDBt \u0111i theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh (c\xF3 th\u1EC3 v\u01B0\u1EE3t \u0111\u1ECBa h\xECnh).N\u1ED9i t\u1EA1i: Hayate \u0111\u01B0\u1EE3c t\u0103ng s\xE1t th\u01B0\u01A1ng g\xE2y ra v\xE0 t\u1ED1c ch\u1EA1y khi c\xF3 t\u01B0\u1EDBng \u0111\u1ECBch trong v\xF2ng 5m quanh b\u1EA3n th\xE2n.",
      s3: "B\xE3o phi ti\xEAu: Hayate bi\u1EBFn \u0111\u1EBFn \u0111i\u1EC3m \u0111\xE3 ch\u1ECDn \u0111\u1ED3ng th\u1EDDi li\xEAn t\u1EE5c n\xE9m phi ti\xEAu c\xF4ng k\xEDch c\xE1c k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i."
    },
    meta_data: {
      win_rate: 50.86,
      pick_rate: 48.29,
      ban_rate: 8.13
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_563",
    name: "Heino",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/305630head.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Thi\xEAn m\u1EC7nh th\u1EA5u su\u1ED1t: D\u01B0\u1EDBi s\u1EF1 d\u1EABn d\u1EAFt c\u1EE7a v\u1EADn m\u1EC7nh, Heino c\xF3 th\u1EC3 chi\u1EBFn \u0111\u1EA5u \u1EDF hai tr\u1EA1ng th\xE1i: C\u1EADn chi\u1EBFn v\xE0 t\u1EA7m xa.Chi\xEAu th\u1EE9c v\xE0 \u0111\xE1nh th\u01B0\u1EDDng c\u1EADn chi\u1EBFn tr\xFAng \u0111\u1ECBch s\u1EBD t\xEDch d\u1EA5u \u1EA5n l\xEAn m\u1EE5c ti\xEAu trong 7 gi\xE2y.T\u1EA7m xa: Heino ng\u01B0ng t\u1EE5 th\u1EA7n l\u1EF1c v\u1EADn m\u1EC7nh \u0111\u1EC3 t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch t\u1EEB xa, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 s\xE1t th\u01B0\u01A1ng ph\xE9p.C\u1EADn chi\u1EBFn: Heino n\xE9m tr\u01B0\u1EE3ng ki\u1EBFm xo\xE1y tr\xF2n li\xEAn t\u1EE5c g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s1: "Ng\xE2n lam th\xE1nh gi\xE1o / Lu\xE2n h\u1ED3i tr\u1EA3m k\xEDch: Heino m\u1ED7i l\u1EA7n \u0111\xE1nh tr\xFAng m\u1ED9t m\u1EE5c ti\xEAu c\xF3 d\u1EA5u \u1EA5n s\u1EBD gi\u1EA3m 0.2 gi\xE2y h\u1ED3i chi\xEAu, t\u1ED1i \u0111a gi\u1EA3m 1 gi\xE2y.\u0110\xE1nh xa:Heino chuy\u1EC3n h\xF3a v\u1EADn m\u1EC7nh th\u1EA7n tr\u01B0\u1EE3ng th\xE0nh Ng\xE2n lam th\xE1nh gi\xE1o v\xE0 ph\xF3ng v\u1EC1 ph\xEDa \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.N\u1EBFu ph\xEDa tr\u01B0\u1EDBc c\xF3 m\u1EE5c ti\xEAu b\u1ECB \u0111\xE1nh d\u1EA5u, Heino s\u1EBD n\xE9m th\xEAm th\xE1nh gi\xE1o ph\u1EE5 g\xE2y 75% s\xE1t th\u01B0\u01A1ng so v\u1EDBi th\xE1nh gi\xE1o ch\xEDnh.N\u1EBFu th\xE1nh gi\xE1o tr\xFAng c\xF9ng m\u1ED9t m\u1EE5c ti\xEAu nhi\u1EC1u l\u1EA7n, s\xE1t th\u01B0\u01A1ng c\xE1c l\u1EA7n sau ch\u1EC9 c\xF2n 50%.C\u1EADn chi\u1EBFn:Heino chuy\u1EC3n h\xF3a v\u1EADn m\u1EC7nh th\u1EA7n tr\u01B0\u1EE3ng th\xE0nh song nh\u1EADn quang ki\u1EBFm v\xE0 ph\xF3ng ki\u1EBFm bay theo qu\u1EF9 \u0111\u1EA1o xo\xE1y tr\xF2n g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m l\xE0m ch\u1EADm m\u1EE5c ti\xEAu trong 2 gi\xE2y.M\u1ED7i l\u1EA7n \u0111\xE1nh tr\xFAng m\u1EE5c ti\xEAu c\xF3 d\u1EA5u \u1EA5n, Heino s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i m\u1ED9t l\u01B0\u1EE3ng m\xE1u nh\u1EA5t \u0111\u1ECBnh.T\u1ED1i \u0111a h\u1ED3i m\xE1u 3 l\u1EA7n v\u1EDBi m\u1ED7i l\u1EA7n tung chi\xEAu.",
      s2: "Thi\xEAn m\u1EC7nh d\u1ECBch chuy\u1EC3n: Heino l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 n\u1EBFu kh\xF4ng c\xF3 t\u01B0\u1EDBng \u0111\u1ECBch xung quanh th\xEC anh ta s\u1EBD chuy\u1EC3n sang tr\u1EA1ng th\xE1i \u0111\xE1nh xa. N\u1EBFu c\xF3 t\u01B0\u1EDBng \u0111\u1ECBch g\u1EA7n \u0111\xF3 th\xEC s\u1EBD chuy\u1EC3n sang tr\u1EA1ng th\xE1i c\u1EADn chi\u1EBFn.\u0110\xE1nh xa: B\u1EA3n th\xE2n Heino \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y. M\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch g\u1EA7n \u0111i\u1EC3m b\u1EAFt \u0111\u1EA7u l\u01B0\u1EDBt s\u1EBD gi\xFAp anh ta t\u0103ng th\xEAm 25% t\u1ED1c ch\u1EA1y c\u1ED9ng th\xEAm, t\u1ED1i \u0111a t\u0103ng 50%. N\u1EBFu \u0111\u1ED5i tr\u1EA1ng th\xE1i trong qu\xE1 tr\xECnh n\xE0y, hi\u1EC7u \u1EE9ng t\u0103ng t\u1ED1c s\u1EBD \u0111\u01B0\u1EE3c nh\xE2n \u0111\xF4i.C\u1EADn chi\u1EBFn: T\u0103ng gi\xE1p v\xE0 gi\xE1p ph\xE9p \u0111\u1ED3ng th\u1EDDi h\u1ED3i m\xE1u v\xE0 t\u0103ng gi\u1EDBi h\u1EA1n m\xE1u t\u01B0\u01A1ng \u1EE9ng. M\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch g\u1EA7n \u0111i\u1EC3m k\u1EBFt th\xFAc l\u01B0\u1EDBt s\u1EBD gi\xFAp Heino t\u0103ng 25% hi\u1EC7u qu\u1EA3 h\u1ED3i m\xE1u, t\u1ED1i \u0111a t\u0103ng 50%. N\u1EBFu \u0111\u1ED5i tr\u1EA1ng th\xE1i trong qu\xE1 tr\xECnh n\xE0y, hi\u1EC7u \u1EE9ng h\u1ED3i m\xE1u s\u1EBD \u0111\u01B0\u1EE3c nh\xE2n \u0111\xF4i.",
      s3: "Thi\xEAn m\u1EC7nh th\u1EDDi kh\xF4ng: Heino s\u1EBD ghi nh\u1EDB l\u1EA1i v\u1ECB tr\xED t\u1EA1i th\u1EDDi \u0111i\u1EC3m cu\u1ED1i c\xF9ng trong tr\u1EA1ng th\xE1i \u0111\xE1nh xa tr\u01B0\u1EDBc \u0111\xF3.Heino tri\u1EC3n khai ph\xE1p tr\u1EADn v\xE0 nh\u1EADn t\u1EF7 l\u1EC7 mi\u1EC5n th\u01B0\u01A1ng \u0111\u1ED3ng th\u1EDDi h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n (trong th\u1EDDi gian n\xE0y b\u1EA3n th\xE2n kh\xF4ng th\u1EC3 di chuy\u1EC3n v\xE0 \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng).Sau 1.5 gi\xE2y, ph\xE1p tr\u1EADn n\u1ED5 tung g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi (t\u1ED1i \u0111a 5 t\u01B0\u1EDBng \u0111\u1ECBch) v\xE0 Heino d\u1ECBch chuy\u1EC3n th\u1EDDi kh\xF4ng quay ng\u01B0\u1EE3c v\u1EC1 \u0111i\u1EC3m \u0111\xE3 ghi nh\u1EDB.N\u1EBFu trong ph\xE1p tr\u1EADn c\xF3 tr\u1EE5 phe ta th\xEC tr\u1EE5 \u0111\xF3 s\u1EBD quay v\u1EC1 tr\u1EA1ng th\xE1i 8 gi\xE2y tr\u01B0\u1EDBc (th\u1EADm ch\xED k\u1EC3 c\u1EA3 khi tr\u1EE5 v\u1EEBa b\u1ECB ph\xE1 h\u1EE7y).B\u1EA3n th\xE2n m\xE1u Heino c\xE0ng th\u1EA5p th\xEC hi\u1EC7u qu\u1EA3 h\u1ED3i ph\u1EE5c c\xE0ng cao, t\u1ED1i \u0111a h\u1ED3i m\xE1u g\u1EA5p 2 l\u1EA7n.Sau khi Heino v\xE0 Dolia \u0111\u1EC1u \u0111\u1EA1t c\u1EA5p 15, n\u1EBFu Dolia d\xF9ng chi\xEAu cu\u1ED1i, chi\xEAu cu\u1ED1i c\u1EE7a Heino s\u1EBD \u0111\u01B0\u1EE3c l\xE0m m\u1EDBi.Trong v\xF2ng 5 gi\xE2y, chi\xEAu cu\u1ED1i c\u1EE7a Heino s\u1EBD \u0111\u01B0\u1EE3c thay th\u1EBF b\u1EB1ng chi\xEAu th\u1EE9c h\u1EE3p k\xEDch.---Thi\xEAn m\u1EC7nh th\u1EDDi kh\xF4ng (h\u1EE3p k\xEDch)M\xF4 t\u1EA3 chi\xEAu:Heino s\u1EBD ghi nh\u1EDB l\u1EA1i v\u1ECB tr\xED t\u1EA1i th\u1EDDi \u0111i\u1EC3m cu\u1ED1i c\xF9ng trong tr\u1EA1ng th\xE1i \u0111\xE1nh xa tr\u01B0\u1EDBc \u0111\xF3.Sau \u0111\xF3 Heino tri\u1EC3n khai ph\xE1p tr\u1EADn v\xE0 sau 1.5 gi\xE2y v\xF9ng n\xE0y s\u1EBD b\xF9ng n\u1ED5 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 t\u1EA1o m\u1ED9t k\u1EBFt gi\u1EDBi th\u1EDDi kh\xF4ng k\xE9o d\xE0i 3 gi\xE2y:Trong k\u1EBFt gi\u1EDBi, Heino \u0111\u01B0\u1EE3c t\u1EF1 do h\xE0nh \u0111\u1ED9ng v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng.T\u1EA5t c\u1EA3 m\u1EE5c ti\xEAu kh\xE1c \u0111\u1EC1u r\u01A1i v\xE0o tr\u1EA1ng th\xE1i \u0111\xECnh tr\u1EC7 \u2013 kh\xF4ng th\u1EC3 di chuy\u1EC3n v\xE0 mi\u1EC5n nhi\u1EC5m v\u1EDBi to\xE0n b\u1ED9 s\xE1t th\u01B0\u01A1ng, ngo\u1EA1i tr\u1EEB t\u1EEB HeinoK\u1EBFt th\xFAc chi\xEAu, Heino tr\u1EDF v\u1EC1 v\u1ECB tr\xED t\u1EA1i \u0111i\u1EC3m \u0111\xE3 ghim l\xFAc tr\u01B0\u1EDBc."
    },
    meta_data: {
      win_rate: 51.1,
      pick_rate: 8.64,
      ban_rate: 1.99
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_184",
    name: "Helen",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/184_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Thanh cao: Helen ch\u1ECBu s\xE1t th\u01B0\u01A1ng th\xEC b\u1EA3n th\xE2n s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 h\u1ED3i m\xE1u, c\xE1ch m\u1ED9t kho\u1EA3ng th\u1EDDi gian c\u1ED1 \u0111\u1ECBnh s\u1EBD \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t 1 l\u1EA7n",
      s1: "\xC1nh s\xE1ng th\u1EA7n th\xE1nh: Helen \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y \u0111\u1ED3ng th\u1EDDi li\xEAn t\u1EE5c h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n v\xE0 c\xE1c \u0111\u1ED3ng minh l\xE2n c\u1EADn",
      s2: "Linh hoa th\xE1nh khi\u1EBFt: Helen b\u1EAFn ra 1 \u0111\xF3a linh hoa n\u1EA3y gi\u1EEFa c\xE1c m\u1EE5c ti\xEAu v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p c\xF9ng hi\u1EC7u \u1EE9ng l\xE0m cho\xE1ng",
      s3: "K\u1EBFt gi\u1EDBi sinh m\u1EC7nh: Helen h\u1ED3i m\xE1u cho \u0111\u1ED3ng \u0111\u1ED9i l\xE2n c\u1EADn th\u1EA5p m\xE1u nh\u1EA5t v\xE0 t\u0103ng gi\xE1p c\xF9ng gi\xE1p ph\xE9p"
    },
    meta_data: {
      win_rate: 51.27,
      pick_rate: 2.2,
      ban_rate: 0.26
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_538",
    name: "Iggy",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/538_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110i\u1EC3m H\u1ECFa: Iggy c\xF3 5 n\u1ED9i n\u0103ng v\xE0 m\u1ED7i 4 gi\xE2y h\u1ED3i 1 n\u1ED9i n\u0103ng (ch\u1ECBu \u1EA3nh h\u01B0\u1EDFng c\u01A1 ch\u1EBF h\u1ED3i chi\xEAu) \u0111\u1ED3ng th\u1EDDi ch\u1EC9 c\xF3 chi\xEAu 1 hao n\u1ED9i n\u0103ng. Khi b\u1EADt chi\xEAu 2 v\xE0 d\xF9ng chi\xEAu n\xE0y \u0111\u1EA5nh tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch, Iggy s\u1EBD khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB ch\xE1y v\xE0 l\u1ED9 di\u1EC7n trong v\xF2ng 5 gi\xE2y. Ngo\xE0i ra n\u1EBFu trong th\u1EDDi gian n\xE0y Iggy tung chi\xEAu \u0111\xE1nh tr\xFAng k\u1EBB \u0111\u1ECBch b\u1ECB ch\xE1y, b\u1EA3n th\xE2n h\u1EAFn s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i 1 n\u1ED9i n\u0103ng.",
      s1: "H\u1ECFa V\u0169: Iggy m\u1ED7i 0.75 gi\xE2y oanh t\u1EA1c ma ph\xE1p b\xF9ng n\u1ED5 v\xE0o v\u1ECB tr\xED m\u1EE5c ti\xEAu. Ma ph\xE1p b\xF9ng n\u1ED5 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi 3m. K\u1EBB \u0111\u1ECBch \u0111\u1EE9ng trong trung t\xE2m v\u1EE5 n\u1ED5 b\xE1n k\xEDnh 1.5m s\u1EBD ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p. H\u1ED3i chi\xEAu trong 3 gi\xE2y.",
      s2: "H\u1ECFa T\u1ED1c: Iggy ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i t\u0103ng t\u1ED1c ch\u1EA1y gi\u1EA3m d\u1EA7n, s\u1EBD chuy\u1EC3n th\xE0nh \u0111\u1EA1n l\u1EEDa kh\xF3a c\u1EE9ng m\u1EE5c ti\xEAu r\u1ED3i k\xEDch n\u1ED5. Trong th\u1EDDi gian n\xE0y b\u1EAFn tr\xFAng s\u1EBD khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB \u0111\u1EA9y l\xF9i v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Ti\u1EBFp theo, k\xEDch n\u1ED5 tr\xEAn ng\u01B0\u1EDDi m\u1EE5c ti\xEAu v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi.",
      s3: "H\u1ECFa b\u1EA1o: Sau khi v\u1EADn chi\xEAu, Iggy tung \u0111\xF4i m\u1EAFt h\u1EE7y di\u1EC7t oanh k\xEDch v\xE0o v\u1ECB tr\xED k\u1EBB \u0111\u1ECBch. Chi\xEAu th\u1EE9c sau khi b\xF9ng n\u1ED5 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi. Chi\xEAu c\xF3 th\u1EC3 t\xEDch l\u0169y, m\u1ED7i l\u1EA7n tung chi\xEAu s\u1EBD m\u1EA5t 1 th\u1EDDi gian gi\xE3n c\xE1ch v\xE0 ch\u1ECBu \u1EA3nh h\u01B0\u1EDFng c\u01A1 ch\u1EBF h\u1ED3i chi\xEAu."
    },
    meta_data: {
      win_rate: 51.59,
      pick_rate: 5.59,
      ban_rate: 0.05
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_124",
    name: "Ignis",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/124_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "H\u1ECFa H\u1ED3n: N\u1ED9i t\u1EA1i: Ho\u1EA3 c\u1EA7u tr\xFAng \u0111\xEDch khi\u1EBFn c\xE1c n\u1EA1n nh\xE2n ph\u1EA3i g\xE1nh ch\u1ECBu hi\u1EC7u \u1EE9ng H\u1ECFa h\u1ED3n, hi\u1EC7u \u1EE9ng k\xE9o d\xE0i 2.5 gi\xE2y. Chi\xEAu th\u1EE9c ti\u1EBFp theo c\u1EE7a Ignis n\u1EBFu k\xEDch ph\xE1t H\u1ECFa h\u1ED3n s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a\xA0v\xE0 h\u1ED3i m\xE1u cho Ignis.",
      s1: "H\u1ECFa C\u1EA7u: Ignis tung c\u1EA7u l\u1EEDa v\xE0o m\u1EE5c ti\xEAu \u0111\u1EA7u ti\xEAn, th\u1EE9 s\u1EBD ph\xE1t n\u1ED5 theo h\xECnh n\xF3n l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch ph\xEDa sau, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, \u0111\u1ED3ng th\u1EDDi t\u0103ng t\u1ED1c ch\u1EA1y trong 1 gi\xE2y. N\u1EBFu m\u1EE5c ti\xEAu tr\xFAng chi\xEAu \u0111ang d\xEDnh ph\u1EA3i hi\u1EC7u \u1EE9ng H\u1ECFa h\u1ED3n, Ignis s\u1EBD nh\u1EADn m\u1ED9t l\xE1 ch\u1EAFn gi\xFAp ch\u1EB7n s\xE1t th\u01B0\u01A1ng trong 2 gi\xE2y.",
      s2: "H\u1ECFa Ho\u1EA1n: Ignis tri\u1EC7u h\u1ED3i m\u1ED9t c\u01A1n m\u01B0a l\u1EEDa trong 3 gi\xE2y t\u1EA1i \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i gi\xE2y, v\xE0 l\xE0m ch\u1EADm  t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n trong 2 gi\xE2y. N\u1EBFu m\u1EE5c ti\xEAu \u0111ang b\u1ECB d\xEDnh H\u1ECFa h\u1ED3n, s\u1EBD b\u1ECB cho\xE1ng trong 0.75 gi\xE2y.",
      s3: "H\u1ECFa Tr\u1EADn: Ignis v\u1EBD ra m\u1ED9t ph\xE1p tr\u1EADn r\u1EF1c ch\xE1y, tho\xE1ng ch\u1ED1c sau \u0111\xF3 nh\u1EEFng k\u1EBB \u0111\u1ECBch trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng s\u1EBD ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p. N\u1EBFu m\u1EE5c ti\xEAu tr\xFAng chi\xEAu \u0111ang d\xEDnh ph\u1EA3i hi\u1EC7u \u1EE9ng H\u1ECFa h\u1ED3n, n\u1EA1n nh\xE2n s\u1EBD ch\u1ECBu s\xE1t th\u01B0\u01A1ng chu\u1EA9n."
    },
    meta_data: {
      win_rate: 49.65,
      pick_rate: 3.33,
      ban_rate: 0.06
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_136",
    name: "Ilumia",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/136_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Th\u1EA7n l\u1EF1c: "N\u1ED9i t\u1EA1i: Qu\u1EA3 c\u1EA7u \xE1nh s\xE1ng s\u1EBD l\u1EADp t\u1EE9c \u0111\u01B0\u1EE3c l\xE0m m\u1EDBi th\u1EDDi gian h\u1ED3i, \u0111\u1ED3ng th\u1EDDi \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3atrong v\xF2ng 3 gi\xE2y ti\u1EBFp theo sau m\u1ED7i khi Ilumia tung 2 chi\xEAu b\u1EA5t k\u1EF3."',
      s1: 'Qu\u1EA3 c\u1EA7u \xE1nh s\xE1ng: "Ilumia tung qu\u1EA3 c\u1EA7u n\u0103ng l\u01B0\u1EE3ng theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, ph\xE1t n\u1ED5 khi bay h\u1EBFt t\u1EA7m ho\u1EB7c tr\xFAng ph\u1EA3i m\u1EE5c ti\xEAu, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p.Khi \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a b\u1EDFi n\u1ED9i t\u1EA1i, Qu\u1EA3 c\u1EA7u \xE1nh s\xE1ng s\u1EBD g\xE2y th\xEAm nhi\u1EC1u s\xE1t th\u01B0\u01A1ng tr\xEAn \u0111\u01B0\u1EDDng bay, t\u0103ng t\u1ED1i \u0111a n\u1EBFu \u1EDF \u0111i\u1EC3m cu\u1ED1i v\xE0 h\u1EA5t v\u0103ng\xA0c\xE1c n\u1EA1n nh\xE2n tr\xFAng chi\xEAu.Nh\u1EEFng n\u1EA1n nh\xE2n b\u1ECB h\u1EA5t v\u0103ng khi ch\u1EA1m \u0111\u1EA5t s\u1EBD b\u1ECB cho\xE1ng v\xE0 l\xE0m ch\u1EADm."',
      s2: "Tr\u1EE5c xu\u1EA5t: Ilumia \u0111\u1EA9y l\xF9i m\u1ECDi k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.\xA0N\u1EBFu c\xF3 n\u1EA1n nh\xE2n tr\xFAng chi\xEAu, ch\xFAng s\u1EBD b\u1ECB l\xE0m ch\u1EADm v\xE0 khi\u1EBFn Ilumia \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y.",
      s3: "Th\u1EA7n tr\u1EADn: Ilumia tri\u1EC7u h\u1ED3i ph\xE1p tr\u1EADn ch\u1EE9a \u0111\u1EA7y s\u1EE9c m\u1EA1nh th\u1EA7n th\xE1nh ngay v\u1ECB tr\xED hi\u1EC7n t\u1EA1i c\u1EE7a t\u1EA5t c\u1EA3 t\u01B0\u1EDBng \u0111\u1ECBch, l\xE0m hi\u1EC7n h\xECnh ch\xFAng trong th\u1EDDi gian ng\u1EAFn, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m cho\xE1ng c\xE1c n\u1EA1n nh\xE2n."
    },
    meta_data: {
      win_rate: 49.65,
      pick_rate: 3.12,
      ban_rate: 0.02
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_526",
    name: "Ishar",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/526_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "T\xED N\u1ECB: N\u1ED9i t\u1EA1i: Ishar t\u1EF1 \u0111\u1ED9ng tri\u1EC7u h\u1ED3i T\xFD N\u1ECB tr\u1EE3 chi\u1EBFn. T\xFD N\u1ECB c\xF3 l\u1EF1c c\xF4ng k\xEDch, m\xE1u, gi\xE1p v\xE0 gi\xE1p ph\xE9p t\xEDnh theo s\xE1t th\u01B0\u01A1ng ph\xE9p c\u1EE7a ch\u1EE7 nh\xE2n v\xE0 t\u1EF1 \u0111\u1ED9ng b\xE1m s\xE1t Ishar.",
      s1: "\u0110\xE1 Ma Thu\u1EADt: Ishar b\u1EAFn ra 1 vi\xEAn \u0111\xE1 ma ph\xE1p g\xE2y ra s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng b\u1EAFn. N\u1EBFu b\u1EAFn tr\xFAng 2 t\u01B0\u1EDBng \u0111\u1ECBch chi\xEAu n\xE0y s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a. Vi\xEAn \u0111\xE1 b\u1EAFn tr\xFAng n\u1EA1n nh\xE2n \u0111\u1EA7u ti\xEAn s\u1EBD d\u1EF1ng l\xEAn n\u1EA5m h\u01B0\u01A1ng sau l\u01B0ng m\u1EE5c ti\xEAu v\xE0 ph\xE1t n\u1ED5 g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p.T\xED N\u1ECB: Ch\u1EA1y nhanh \u0111\u1EBFn t\u1EA5n c\xF4ng m\u1EE5c ti\xEAu \u0111\u1EA7u ti\xEAn b\u1ECB tr\xFAng \u0111\xE1 ma ph\xE1p; n\u1EBFu k\u1EBB tr\xFAng \u0111\xF2n l\xE0 t\u01B0\u1EDBng \u0111\u1ECBch l\u1EBB s\u1EBD b\u1ECB T\xED N\u1ECB s\u1EBD nh\u1EA3y v\u1ED3 \u0111\u1EBFn \u0111\xE1nh khi\u1EBFn t\u01B0\u1EDBng \u0111\u1ECBch ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s2: "Khi\xEAn Ma Thu\u1EADt: Ishar nh\u1EADn \u0111\u01B0\u1EE3c 1 t\u1EA5m l\xE1 ch\u1EAFn ch\u1EB7n s\xE1t th\u01B0\u01A1ng trong v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y.T\xED N\u1ECB: L\u1EADp t\u1EE9c quay v\u1EC1 b\xEAn c\u1EA1nh ch\u1EE7 nh\xE2n v\xE0 h\u1EA5t tung \u0111\u1ECBch xung quanh Ishar v\xE0 l\xE0m ch\u1EADm.",
      s3: "Sa B\xE0n Ma Thu\u1EADt: Ishar tri\u1EC7u h\u1ED3i 1 l\u1ED3ng ma thu\u1EADt khi\u1EBFn h\xECnh th\xE0nh 1 k\u1EBFt gi\u1EDBi giam gi\u1EEF k\u1EBB \u0111\u1ECBch.T\xED N\u1ECB: L\u1EADp t\u1EE9c nh\u1EA3y v\xE0o m\u1EE5c ti\xEAu trong l\u1ED3ng ma thu\u1EADt, khi \u0111\xE1p \u0111\u1EA5t g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p."
    },
    meta_data: {
      win_rate: 46.78,
      pick_rate: 3.95,
      ban_rate: 0.08
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_115",
    name: "Jinna",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/115_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u1EA4n ch\xFA: N\u1ED9i tai: Sau 4 l\u1EA7n c\xF4ng k\xEDch, g\u1ED3m c\u1EA3 \u0111\xE1nh th\u01B0\u1EDDng l\u1EABn chi\xEAu th\u1EE9c, l\u1EA7n t\u1EA5n c\xF4ng k\u1EBF ti\u1EBFp s\u1EBD ph\xF3ng ra k\xECnh l\u1EF1c xuy\xEAn th\u1EA5u k\u1EBB \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s1: 'Lo\u1EA1n h\u1EA1t: "Jinna tung chu\u1ED7i h\u1EA1t v\xE0o t\u1ED1i \u0111a 2 k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. K\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD khi\u1EBFn chu\u1ED7i h\u1EA1t n\u1EA3y \u0111i t\u1ED1i \u0111a 2 l\u1EA7n.M\u1ED7i l\u1EA7n tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch, h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n. Nh\u1EEFng h\u1EA1t ch\xE2u \u0111\u1EADp l\xEAn c\xF9ng m\u1ED9t m\u1EE5c ti\xEAu s\u1EBD g\xE2y \xEDt s\xE1t th\u01B0\u01A1ng v\xE0 h\u1ED3i \xEDt m\xE1u h\u01A1n."',
      s2: "H\xE0ng Y\xEAu Ph\u1EE5c Ma: Jinna ph\xF3ng k\xECnh l\u1EF1c l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y k\u1EBB \u0111\u1ECBch xung quanh v\xE0 g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s3: 'K\u1EBFt Gi\u1EDBi X\xE1 L\u1EE3i: "Jinna t\u1EA1o ra m\u1ED9t k\u1EBFt gi\u1EDBi b\u1EB1ng nh\u1EEFng vi\xEAn x\xE1 l\u1EE3i bay quanh b\u1EA3n th\xE2n g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i \u0111\u1EE3t, t\u1ED5ng c\u1ED9ng 10 \u0111\u1EE3t. Ngay t\u1EA1i th\u1EDDi \u0111i\u1EC3m k\xEDch ho\u1EA1t k\u1EBFt gi\u1EDBi, Jinna\xA0l\u1EADp t\u1EE9c nh\u1EADn \u0111\u01B0\u1EE3c gi\u1EA3m th\u01B0\u01A1ng, v\u1EDBi m\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch c\u1EA1nh b\xEAn s\u1EBD khi\u1EBFn Jinna nh\u1EADn th\xEAm\xA0gi\u1EA3m th\u01B0\u01A1ng trong th\u1EDDi gian hi\u1EC7u l\u1EF1c.Ngo\xE0i ra, Jinna c\xF2n \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y gi\u1EA3m d\u1EA7n trong th\u1EDDi gian ng\u1EAFn."'
    },
    meta_data: {
      win_rate: 49.62,
      pick_rate: 1.22,
      ban_rate: 0.02
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_110",
    name: "Kahlii",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/110_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Th\u1EA5u T\xE2m: N\u1ED9i t\u1EA1i: C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng g\xE2y hi\u1EC7u \u1EE9ng xuy\xEAn th\u1EA5u, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch theo \u0111\u01B0\u1EDDng th\u1EB3ng.",
      s1: "T\u1EE5 linh tr\u1EADn: Kahlii t\u1EA1o ra m\u1ED9t v\xF9ng \u0111\u1EA5t b\u1ECB nguy\u1EC1n r\u1EE7a g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i 0.5 gi\xE2y l\xEAn t\u1EA5t c\u1EA3, \u0111\u1ED3ng th\u1EDDi khi\u1EBFn n\u1EA1n nh\xE2n b\u1ECB l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y.",
      s2: 'Linh h\u1ED3n h\u1ED9 m\u1EC7nh: "N\u1ED9i t\u1EA1i: Kahlii \u0111\u01B0\u1EE3c c\u1ED9ng th\xEAm t\u1ED1c \u0111\u1ED9 ch\u1EA1y.K\xEDch ho\u1EA1t: Kahlii t\u1EA1o khi\xEAn,\xA0t\u0103ng\xA0c\xF4ng ph\xE9p v\xE0 t\u1ED1c ch\u1EA1y cho b\u1EA3n th\xE2n."',
      s3: "Binh \u0111o\xE0n linh h\u1ED3n: Trong v\xF2ng 5 gi\xE2y, c\xF4 tri\u1EC7u h\u1ED3i 55 \u0111\u1EE3t h\u1ED3n ma li\xEAn t\u1EE5c t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. K\u1EF9 n\u0103ng n\xE0y g\xE2y s\xE1t th\u01B0\u01A1ng th\xEAm 10% s\xE1t th\u01B0\u01A1ng l\xEAn \u0111\u01A1n v\u1ECB kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng"
    },
    meta_data: {
      win_rate: 50.69,
      pick_rate: 5.18,
      ban_rate: 0.04
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_153",
    name: "Kaine",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/153_120v2.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Truy N\xE3: N\u1ED9i t\u1EA1i: Kaine t\xE0ng h\xECnh khi xung quanh kh\xF4ng c\xF3 \u0111\u1ECBch",
      s1: "Huy\u1EBFt lu\xE2n: G\xE2y s\xE1t th\u01B0\u01A1ng cho \u0111\u1ECBch xung quanh. K\u1EBB \u0111\u1ECBch c\xF2n \xEDt m\xE1u nh\u1EA5t s\u1EBD nh\u1EADn th\xEAm s\xE1t th\u01B0\u01A1ng.",
      s2: "Huy\u1EBFt Ki\u1EBFm: Ph\xF3ng huy\u1EBFt \u1EA3nh ki\u1EBFm kh\xED theo h\u01B0\u1EDBng k\u1EBB \u0111\u1ECBch, \u0111\xE1nh d\u1EA5u v\xE0 l\xE0m ch\u1EADm ch\xFAng. Trong th\u1EDDi gian \u0111\xE1nh d\u1EA5u, Kaine s\u1EBD l\xE0m cho\xE1ng \u0111\u1ECBch n\u1EBFu \u0111\xE1nh tr\xFAng ch\xFAng.",
      s3: "Huy\u1EBFt K\xEDch: L\u01B0\u1EDBt v\u1EC1 tr\u01B0\u1EDBc v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng tr\xEAn \u0111\u01B0\u1EDDng di chuy\u1EC3n. Kaine \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng v\xE0 kh\xF4ng b\u1ECB kh\xF3a m\u1EE5c ti\xEAu khi \u0111ang l\u01B0\u1EDBt."
    },
    meta_data: {
      win_rate: 50.26,
      pick_rate: 8.56,
      ban_rate: 3.39
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_531",
    name: "Keera",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/531_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\xC1m l\u01B0u: Keera c\xF3 s\u1EB5n h\xFAt m\xE1u ph\xE9p, v\xE0 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a c\xF4 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Tuy nhi\xEAn s\xE1t th\u01B0\u01A1ng chi\xEAu c\u1EE7a Keera s\u1EBD b\u1ECB chia \u0111\u1EC1u cho s\u1ED1 k\u1EBB \u0111\u1ECBch \u0111\xE1nh tr\xFAng (t\u1ED1i \u0111a l\xE0 chia 3).",
      s1: "\xC1c m\u1ED9ng \u1EA3o \u1EA3nh: Keera \u0111\u1EB7t 1 huy\u1EC5n \u1EA3nh t\u1EA1i v\u1ECB tr\xED \u0111ang \u0111\u1EE9ng v\xE0 nh\u1EA3y \u0111\u1EBFn \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi. N\u1EA1n nh\xE2n g\u1EA7n nh\u1EA5t s\u1EBD b\u1ECB \u0111\xE1nh d\u1EA5u trong 3 gi\xE2y \u0111\u1ED3ng th\u1EDDi b\u1ECB k\xE9o \u0111\u1EBFn g\u1EA7n Keera. Sau khi tung chi\xEAu, 3 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp c\u1EE7a Keera \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p thay v\xEC v\u1EADt l\xFD.K\xEDch ho\u1EA1t l\u1EA7n n\u1EEFa: Huy\u1EC5n \u1EA3nh b\u1EAFn th\u1EB3ng \u0111\u1EBFn n\u1EA1n nh\xE2n b\u1ECB \u0111\xE1nh d\u1EA5u, \u0111\xE1nh tr\xFAng s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi. N\u1EBFu kh\xF4ng \u0111\xE1nh d\u1EA5u \u0111\u01B0\u1EE3c t\u01B0\u1EDBng \u0111\u1ECBch, huy\u1EC5n \u1EA3nh s\u1EBD b\u1EAFn th\u1EB3ng \u0111\u1EBFn Keera v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p xung quanh.",
      s2: "Tam gi\xE1c qu\u1EF7: Keera l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc \u0111\u1ED3ng th\u1EDDi t\u1ECFa ra 2 ph\xE2n th\xE2n kh\xF4ng th\u1EC3 ph\xE2n bi\u1EC7t, m\u1ED7i 1 ph\xE2n th\xE2n chia ra g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p \u0111\u1ED3ng th\u1EDDi h\xECnh th\xE0nh m\u1ED9t tam gi\xE1c qu\u1EF7, 1 gi\xE2y sau g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.Khi tung chi\xEAu Keera kh\xF4ng b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu \u0111\u1ED3ng th\u1EDDi bi\xEAn gi\u1EDBi tam gi\xE1c s\u1EBD khi\u1EBFn k\u1EBB \u0111\u1ECBch ch\u1EA1m v\xE0o b\u1ECB cho\xE1ng.T\xEDch l\u0169y 3 \xE1m \u0111ao: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Keera chuy\u1EC3n th\xE0nh \u0111\xE1nh xa, t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 c\xF3 th\u1EC3 v\u1EEBa \u0111\xE1nh v\u1EEBa ch\u1EA1y. K\u1EBB \u0111\u1ECBch nh\xECn ph\xE2n th\xE2n c\u1EE7a Keera s\u1EBD th\u1EA5y gi\u1ED1ng nhau nh\u01B0ng b\u1EA3n th\xE2n v\u1EABn ph\xE2n bi\u1EC7t r\xF5.",
      s3: "Truy s\xE1t: Keera nh\u1EADn \u0111\u01B0\u1EE3c H\u1EAFc \xE1m b\u1EA3o h\u1ED9 gi\xFAp t\u0103ng t\u1ED1c ch\u1EA1y. \u0110\u1ED3ng th\u1EDDi, Keera c\xF3 th\u1EC3 \u0111i xuy\xEAn \u0111\u1ECBa h\xECnh, ki\u1EBFn tr\xFAc v\xE0 ch\u1ED1ng ch\u1ECBu 3 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a t\u01B0\u1EDBng \u0111\u1ECBch v\xE0 n\u1EBFu ch\u1EA1m v\xE0o \u0111\u1ECBa h\xECnh s\u1EBD \u0111\u01B0\u1EE3c \u1EA9n th\xE2n.Khi H\u1EAFc \xE1m b\u1EA3o h\u1ED9 k\u1EBFt th\xFAc s\u1EBD l\u1EADp t\u1EE9c l\xE0m m\u1EDBi chi\xEAu 1 v\xE0 chi\xEAu 2. Khi ch\u1ED1ng ch\u1ECBu h\u1EBFt s\u1ED1 l\u1EA7n \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD x\xF3a H\u1EAFc \xE1m b\u1EA3o h\u1ED9."
    },
    meta_data: {
      win_rate: 50.91,
      pick_rate: 6.8,
      ban_rate: 0.07
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_139",
    name: "Kil'Groth",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/139_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\xC1p su\u1EA5t bi\u1EC3n s\xE2u: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng gi\xFAp t\u0103ng t\u1ED1c \u0111\xE1nh (t\u0103ng theo c\u1EA5p t\u01B0\u1EDBng), t\u1ED1i \u0111a c\u1ED9ng d\u1ED3n 5\xA0l\u1EA7n. \u0110\u1EB7c bi\u1EC7t c\xE1c \u0111\xF2n th\u1EE9 ba c\xF3 ph\u1EA1m vi c\xF4ng k\xEDch r\u1ED9ng h\u01A1n.",
      s1: "S\xF3ng t\u1EED vong: Kil'Groth l\u01B0\u1EDBt t\u1EDBi tr\u01B0\u1EDBc \u0111\xE2m m\xE2u v\xE0o k\u1EBB \u0111\u1ECBch, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m gi\u1EA3m t\u1ED1c ch\u1EA1y m\u1EE5c ti\xEAu. \u0110\xE2m tr\xFAng t\u01B0\u1EDBng gi\xFAp gi\u1EA3m h\u1ED3i chi\xEAu.",
      s2: `M\xE2u th\u1EA7n l\u1EF1c: "N\u1ED9i t\u1EA1i: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u1EE9 ba g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p.K\xEDch ho\u1EA1t: Kil'Groth c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD th\u1EDDi gian ng\u1EAFn.\xA0M\u1ED7i m\u1EE5c ti\xEAu tr\xFAng \u0111\xF2n gi\xFAp h\u1EAFn\xA0h\u1ED3i m\xE1u. Gi\xE1 tr\u1ECB h\u1ED3i ph\u1EE5c\xA0\u0111\u01B0\u1EE3c t\u0103ng l\xEAn n\u1EBFu n\u1EA1n nh\u1EADn nh\xE2n l\xE0 t\u01B0\u1EDBng \u0111\u1ECBch."`,
      s3: "\xC1c m\u1ED9ng bi\u1EC3n kh\u01A1i: Kil\u2019Groth l\u1EADp t\u1EE9c nh\u1EADn 5\xA0\u0111i\u1EC3m c\u1ED9ng d\u1ED3n n\u1ED9i t\u1EA1i \xC1p su\u1EA5t bi\u1EC3n s\xE2u, lo\u1EA1i b\u1ECF m\u1ECDi tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF v\xE0 \u0111\u01B0\u1EE3c t\u0103ng\xA0t\u1ED1c ch\u1EA1y gi\u1EA3m d\u1EA7n. Ch\u01B0a h\u1EBFt, trong 4\xA0gi\xE2y k\u1EBF ti\u1EBFp, h\u1EAFn \u0111\u01B0\u1EE3c mi\u1EC5n nhi\u1EC5m ho\xE0n to\xE0n kh\u1ECFi m\u1ECDi tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF. M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch k\xE9o d\xE0i tr\u1EA1ng th\xE1i n\xE0y th\xEAm th\u1EDDi gian hi\u1EC7u qu\u1EA3, t\u1ED1i \u0111a 3 gi\xE2y."
    },
    meta_data: {
      win_rate: 51.44,
      pick_rate: 10.2,
      ban_rate: 0.26
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_162",
    name: "Kriknak",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/162_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Nh\u1EA5m Nh\xE1p: N\u1ED9i t\u1EA1i: Sau khi chi\xEAu c\u1EE7a Kriknak tr\xFAng \u0111\xEDch, \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp c\u1EE7a h\u1EAFn s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s1: '\u1EA4u Tr\xF9ng Qu\u1EF7: "Kriknak g\u1ECDi m\u1ED9t b\u1EA7y \u1EA5u tr\xF9ng qu\u1EF7 t\u1EA5n c\xF4ng m\u1ED9t m\u1EE5c ti\xEAu (\u01B0u ti\xEAn t\u01B0\u1EDBng) g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, v\xE0 \u0111\xE1nh d\u1EA5u \u1EA4u tr\xF9ng l\xEAn n\u1EA1n nh\xE2n.M\u1ECDi \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng ho\u1EB7c chi\xEAu th\u1EE9c c\u1EE7a Kriknak \u0111\u1EC1u s\u1EBD k\xEDch ho\u1EA1t d\u1EA5u \u1EA5n g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p theo m\xE1u t\u1ED1i \u0111a c\u1EE7a m\u1EE5c ti\xEAu, \u0111\u1ED3ng th\u1EDDi gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu v\xE0 h\u1ED3i ph\u1EE5c n\u0103ng l\u01B0\u1EE3ng cho h\u1EAFn."',
      s2: "B\u1ECD H\xFAc: Kriknak \u1EE7i th\u1EB3ng v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. M\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD gi\xFAp h\u1EAFn h\u1ED3i th\xEAm m\xE1u.",
      s3: "Hi\u1EC3m H\u1ECDa Kh\xF4ng Trung: Kriknak \u0111\u1EADp c\xE1nh bay l\xEAn kh\xF4ng gi\xFAp t\u0103ng t\u1ED1c ch\u1EA1y trong m\u1ED9t th\u1EDDi gian, b\xF9 l\u1EA1i trong tr\u1EA1ng th\xE1i n\xE0y h\u1EAFn kh\xF4ng th\u1EC3 tung \u0111\xF2n \u0111\xE1nh ho\u1EB7c c\xE1c chi\xEAu th\u1EE9c kh\xE1c ngo\u1EA1i tr\u1EEB \u1EA4u tr\xF9ng qu\u1EF7. T\xE1i k\xEDch ho\u1EA1t l\u1EA7n n\u1EEFa \u0111\u1EC3 \u0111\xE1p \u0111\u1EA5t, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, k\xE8m hi\u1EC7u \u1EE9ng gi\u1EA3m t\u1ED1c ch\u1EA1y l\xEAn c\xE1c n\u1EA1n nh\xE2n tr\xFAng chi\xEAu."
    },
    meta_data: {
      win_rate: 47.51,
      pick_rate: 3.13,
      ban_rate: 0.01
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_106",
    name: "Krixi",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/106_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Tung c\xE1nh: N\u1ED9i t\u1EA1i: Khi tung k\u0129 n\u0103ng tr\xFAng \u0111\xEDch, t\u1ED1c ch\u1EA1y c\u1EE7a c\xF4 s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng l\xEAn trong th\u1EDDi gian ng\u1EAFn.",
      s1: "B\u01B0\u1EDBm \u1EA3o: Krixi tung ra m\u1ED9t \u1EA3nh \u1EA3o b\u01B0\u01A1m b\u01B0\u1EDBm bay \u0111i bay v\u1EC1 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i l\u01B0\u1EE3t.\xA0M\u1ED7i \u0111\u01A1n v\u1ECB tr\xFAng \u0111\xEDch s\u1EBD gi\u1EA3m s\xE1t th\u01B0\u01A1ng l\xEAn c\xE1c \u0111\u01A1n v\u1ECB sau \u0111\xF3, t\u1ED1i \u0111a gi\u1EA3m c\xF2n 40%.",
      s2: "B\xE3o l\xE1: Krixi k\xEAu g\u1ECDi s\u1EE9c m\u1EA1nh thi\xEAn nhi\xEAn t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch, h\u1EA5t tung ch\xFAng v\xE0 g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s3: 'M\u01B0a sao b\u0103ng: "Trong v\xF2ng 5 gi\xE2y, Krixi g\u1ECDi xu\u1ED1ng m\u01B0a sao b\u0103ng c\xF4ng k\xEDch k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i l\u1EA7n r\u01A1i tr\xFAng. M\u1ED7i k\u1EBB \u0111\u1ECBch ch\u1EC9 c\xF3 th\u1EC3 b\u1ECB tr\xFAng t\u1ED1i \u0111a 4 l\u1EA7n.Krixi \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y khi \u0111ang s\u1EED d\u1EE5ng chi\xEAu cu\u1ED1i."'
    },
    meta_data: {
      win_rate: 48.16,
      pick_rate: 18.78,
      ban_rate: 0.08
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_189",
    name: "Krizzix",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/189_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u1EA8n \u0110\u1ED9t: Sau khi tho\xE1t kh\u1ECFi t\u1EA7m nh\xECn c\u1EE7a \u0111\u1ECBch trong 3 gi\xE2y, Krizzix \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y di\u1EC7n r\u1ED9ng quanh k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu. N\u1EBFu Krizzix tung \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u01B0\u1EDDng h\xF3a khi k\u1EBB \u0111\u1ECBch kh\xF4ng nh\xECn th\u1EA5y h\u1EAFn, th\u1EDDi gian h\u1ED3i c\u1EE7a chi\xEAu n\xE0y \u0111\u01B0\u1EE3c gi\u1EA3m.",
      s1: "Ng\u1EE5y Trang \u0110\u01A1n L\u1EBB: Krizzix ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i ng\u1EE5y trang. D\u01B0\u1EDBi tr\u1EA1ng th\xE1i n\xE0y, Krizzix \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m hi\u1EC7u \u1EE9ng gi\u1EA3m gi\xE1p c\xF9ng gi\xE1p ph\xE9p l\xEAn nh\u1EEFng n\u1EA1n nh\xE2n h\u1EAFn l\u01B0\u1EDBt qua; ng\u1EE5y trang s\u1EBD m\u1EA5t hi\u1EC7u l\u1EF1c khi Krizzix g\xE2y b\u1EA5t k\u1EF3 s\xE1t th\u01B0\u01A1ng n\xE0o kh\xE1c l\xEAn \u0111\u1ECBch, ngo\u1EA1i tr\u1EEB chi\xEAu n\xE0y.",
      s2: "V\u1EA1n V\u1EADt H\u1EA5p D\u1EABn: Krizzix tri\u1EC7u h\u1ED3i tr\u1EADn ph\xE1p xung quanh b\u1EA3n th\xE2n, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi. Tr\u1EADn ph\xE1p s\u1EBD b\xF9ng n\u1ED5 sau m\u1ED9t th\u1EDDi gian, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi \u0111\u1ED3ng th\u1EDDi h\xFAt n\u1EA1n nh\xE2n l\u1EA1i g\u1EA7n Krizzix v\xE0 l\xE0m cho\xE1ng; n\u1EBFu t\u01B0\u1EDBng \u0111\u1ECBch b\u1ECB tr\xFAng chi\xEAu n\xE0y, Krizzix v\xE0 \u0111\u1ED3ng \u0111\u1ED9i trong ph\u1EA1m vi chi\xEAu \u0111\u01B0\u1EE3c nh\u1EADn l\xE1 ch\u1EAFn s\xE1t th\u01B0\u01A1ng.",
      s3: "Ng\u1EE5y Trang \u0110\u1ED3ng B\u1ED9: Krizzix s\u1EED d\u1EE5ng huy\u1EBFt m\u1EA1ch thi\xEAn ph\xFA gi\xFAp \u0111\u1ED3ng \u0111\u1ED9i l\xE2n c\u1EADn \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y, r\u1ED3i 1 gi\xE2y sau c\xF9ng nhau ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i ng\u1EE5y trang. Sau khi tung chi\xEAu Krizzix nh\u1EADn \u0111\u01B0\u1EE3c th\xEAm t\u1EA7m nh\xECn c\u1EE7a m\u1ED9t t\u01B0\u1EDBng \u0111\u1ECBch g\u1EA7n nh\u1EA5t."
    },
    meta_data: {
      win_rate: 49.4,
      pick_rate: 1.1,
      ban_rate: 0.03
    },
    counters: [
      "Ming",
      "Teemee",
      "Dolia"
    ]
  },
  {
    id: "hero_141",
    name: "Lauriel",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/141_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Tr\u1EDDi Ph\u1EA1t: N\u1ED9i t\u1EA1i: C\xE1c chi\xEAu th\u1EE9c tr\xFAng \u0111\xEDch c\u1EE7a Lauriel s\u1EBD kh\u1EAFc d\u1EA5u \u1EA5n Tr\u1EDDi ph\u1EA1t l\xEAn m\u1EE5c ti\xEAu. Khi \u0111\u1EA1t \u0111\u1EE7 4 l\u1EA7n t\xEDch l\u0169y, d\u1EA5u \u1EA5n s\u1EBD b\xF9ng n\u1ED5\xA0gi\xFAp Lauriel h\u1ED3i m\xE1u, g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n di\u1EC7n r\u1ED9ng k\xE8m hi\u1EC7u \u1EE9ng\xA0l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y gi\u1EA3m d\u1EA7n l\xEAn m\u1EE5c ti\xEAu.",
      s1: "Con \u0110\u01B0\u1EDDng S\xE1m H\u1ED1i: Lauriel v\u1EBD ra m\u1ED9t con \u0111\u01B0\u1EDDng \xE1nh s\xE1ng g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p. Trong tho\xE1ng ch\u1ED1c sau \u0111\xF3, con \u0111\u01B0\u1EDDng s\u1EBD b\xF9ng n\u1ED5 g\xE2y l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng t\u01B0\u01A1ng t\u1EF1 l\u1EA7n n\u1EEFa l\xEAn nh\u1EEFng n\u1EA1n nh\xE2n c\xF2n trong v\xF9ng hi\u1EC7u l\u1EF1c.",
      s2: '\u0110\xF4i C\xE1nh Thu\u1EA9n Khi\u1EBFt: "Lauriel tung c\xE1nh l\u01B0\u1EDBt \u0111\u1EBFn h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh. Khi \u0111\u1EBFn n\u01A1i, n\xE0ng v\u1ED7 c\xE1nh t\u1EA1o ra 3 lu\u1ED3ng \xE1nh s\xE1ng t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p theo m\u1ED7i lu\u1ED3ng.K\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu gi\xFAp gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu."',
      s3: '\u0110\u1EA1i Ph\xE1n X\xE9t: "Lauriel tri\u1EC7u h\u1ED3i s\u1EE9c m\u1EA1nh th\u1EA7n th\xE1nh t\u1EA1o ra m\u1ED9t ph\xE1p tr\u1EADn h\xF9ng m\u1EA1nh trong 1 th\u1EDDi gian, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xFAc xu\u1EA5t hi\u1EC7n v\xE0 bi\u1EBFn m\u1EA5t.Trong v\xF9ng hi\u1EC7u l\u1EF1c Lauriel h\u1ED3i chi\xEAu nhanh g\u1EA5p \u0111\xF4i b\xECnh th\u01B0\u1EDDng."'
    },
    meta_data: {
      win_rate: 49.16,
      pick_rate: 7.32,
      ban_rate: 0.21
    },
    counters: [
      "Diaochan",
      "D'Arcy",
      "Liliana"
    ]
  },
  {
    id: "hero_533",
    name: "Laville",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/533_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110\u1EA1n li\xEAn ch\xE2u: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\xEDch c\u1EE7a Laville l\xEAn m\u1EE5c ti\xEAu s\u1EBD gi\xFAp b\u1EA3n th\xE2n t\xEDch l\u0169y n\u1ED9i t\u1EA1i, t\u1ED1i \u0111a t\xEDch l\u0169y 3 t\u1EA7ng. M\u1ED7i t\u1EA7ng n\u1ED9i t\u1EA1i gi\xFAp Laville t\u0103ng t\u1ED1c \u0111\xE1nh. Khi \u0111\u1EA1t \u0111\u1EE7 3 t\u1EA7ng \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a h\u1EAFn s\u1EBD chuy\u1EC3n th\xE0nh \u0110\u1EA1n li\xEAn ch\xE2u khi\u1EBFn m\u1ED7i \u0111\xF2n \u0111\xE1nh b\u1EAFn ra 3 ph\xE1t \u0111\u1EA1n.",
      s1: "\u0110\u1EA1n truy \u1EA3nh: Laville c\u01B0\u1EDDng h\xF3a b\u1EA3n th\xE2n khi\u1EBFn m\u1ED7i \u0111\xF2n \u0111\xE1nh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. N\u1EBFu b\u1EA3n th\xE2n \u0111ang trong tr\u1EA1ng th\xE1i \u0110\u1EA1n li\xEAn ch\xE2u, m\u1ED7i ph\xE1t \u0111\u1EA1n \u0111\u1ED3ng th\u1EDDi g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn 2 k\u1EBB \u0111\u1ECBch kh\xE1c trong ph\u1EA1m vi.",
      s2: "Khi\xEAn ph\u1EA3n t\u1ED1c: Laville nh\u1EADn 1 l\xE1 ch\u1EAFn \u0111\u1EE1 chi\xEAu v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y cho b\u1EA3n th\xE2n. \u0110\u1ED3ng th\u1EDDi \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng trong 3 gi\xE2y k\u1EBF s\u1EBD khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB l\xE0m ch\u1EADm, t\u1ED1i \u0111a c\u1ED9ng d\u1ED3n 3 l\u1EA7n.",
      s3: "\u0110\u1EA1n th\u1EA7n quang: Laville k\u1EBFt h\u1EE3p \u0111\xF4i s\xFAng th\u1EA7n quang b\u1EAFn ra ph\xE1t \u0111\u1EA1n \xE1nh s\xE1ng c\xF3 th\u1EC3 bay xuy\xEAn b\u1EA3n \u0111\u1ED3 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD b\xF9ng n\u1ED5 trong ph\u1EA1m vi l\xEAn t\u01B0\u1EDBng \u0111\u1ECBch v\xE0 khi\u1EBFn ch\xFAng b\u1ECB cho\xE1ng. T\u01B0\u1EDBng \u0111\u1ECBch tr\u1EF1c ti\u1EBFp tr\xFAng chi\xEAu n\xE0y s\u1EBD b\u1ECB cho\xE1ng."
    },
    meta_data: {
      win_rate: 48.26,
      pick_rate: 5.22,
      ban_rate: 0.01
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_510",
    name: "Liliana",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/510_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Y\xEAu h\u1ED3: "N\u1ED9i t\u1EA1i:D\u1EA1ng ng\u01B0\u1EDDi: Trong tr\u1EA1ng th\xE1i lo\xE0i ng\u01B0\u1EDDi Liliana s\u1EBD \u0111\xE1nh xa.D\u1EA1ng h\u1ED3 ly: T\u0103ng gi\xE1p v\xE0 gi\xE1p ph\xE9p v\xE0 t\u1ED1c ch\u1EA1y. \u0110\u1ED3ng th\u1EDDi, \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p."',
      s1: 'H\u1ED3 quang l\u1EF1c: "Khi tung chi\xEAu trong d\u1EA1ng ng\u01B0\u1EDDi Liliana ng\u01B0ng t\u1EE5 ma l\u1EF1c g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi \u1EA3nh h\u01B0\u1EDFng. N\u1EBFu c\xF3 2 t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu tr\u1EDF l\xEAn, \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBFti\u1EBFp c\u1EE7a Liliana s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p d\u1EF1a tr\xEAn m\xE1u t\u1ED1i \u0111a m\u1EE5c ti\xEAu.Khi \u1EDF d\u1EA1ng h\u1ED3 ly s\u1EBD th\xE0nh\xA0H\u1ED3 V\u0129 K\xEDch:\xA0Liliana v\u1EABy \u0111u\xF4i t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, \u0111\u1ED3ng th\u1EDDi khi\u1EBFn l\u1EA7n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF tr\u1EDF th\xE0nh chu\u1ED7i li\xEAn ho\xE0n 3 \u0111\xF2n, m\u1ED7i \u0111\xF2n g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p, k\xE8m hi\u1EC7u \u1EE9ng nh\u1EA3y v\u1ED3 \u0111\u1EBFn m\u1EE5c ti\xEAu."',
      s2: 'H\u1ED3 quang \u0111\u1EA1n: "Khi tung chi\xEAu \u1EDF d\u1EA1ng ng\u01B0\u1EDDi, Liliana b\u1EAFn ra m\u1ED9t lu\u1ED3ng \u0111\u1EA1n ma l\u1EF1c, th\u1EE9 s\u1EBD ph\xE1t n\u1ED5 khi tr\xFAng \u0111\xEDch g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0v\xE0 0.75\xA0gi\xE2y cho\xE1ng l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi hi\u1EC7u l\u1EF1c.Khi \u1EDF d\u1EA1ng h\u1ED3 ly chi\xEAu th\u1EE9c n\xE0y s\u1EBD h\xF3a th\xE0nh\xA0V\u0169 \u0110i\u1EC7u Y\xEAu H\u1ED3:\xA0Liliana l\u01B0\u1EDBt v\u1EC1 h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu. N\u1EBFu c\xF3 n\u1EA1n nh\xE2n l\xE0 t\u01B0\u1EDBng \u0111\u1ECBch, Liliana c\xF3 th\u1EC3 tung chi\xEAu l\u1EA7n n\u1EEFa, b\u1EAFn ra \u0111\u1EA1n linh l\u1EF1c \u0111u\u1ED1i theo t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi."',
      s3: 'Bi\u1EBFn \u1EA3nh ho\xE1n h\xECnh: "D\u1EA1ng ng\u01B0\u1EDDi:\xA0Liliana l\u01B0\u1EDBt \u0111i v\xE0 h\xF3a th\xE0nh h\u1ED3 ly g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu, \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y trong 2 gi\xE2y. Khi l\u01B0\u1EDBt\xA0Liliana kh\xF4ng th\u1EC3 b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu, \u0111\u1ED3ng th\u1EDDi t\u0103ng gi\xE1p v\xE0 gi\xE1p ph\xE9p c\xF9ng\xA0c\xF4ng ph\xE9p\xA0trong 2.5 gi\xE2y.D\u1EA1ng c\xE1o: Liliana l\u01B0\u1EDBt \u0111i v\xE0 h\xF3a th\xE0nh ng\u01B0\u1EDDi\xA0\u0111\u1ED3ng th\u1EDDi \u0111\u1EC3 l\u1EA1i\xA0ph\xE1p tr\u1EADn t\u1EA1i \u0111i\u1EC3m \u0111\u1EBFn v\xE0 \u0111i\xA0khi\u1EBFn c\xE1c k\u1EBB \u0111\u1ECBch b\xEAn trong b\u1ECB gi\u1EA3m t\u1ED1c ch\u1EA1y. Sau 1 gi\xE2y, ph\xE1p tr\u1EADn n\u1ED5 tung g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Su\u1ED1t th\u1EDDi gian l\u01B0\u1EDBt \u0111i, Liliana kh\xF4ng th\u1EC3 b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu \u0111\u1ED3ng th\u1EDDi t\u0103ng c\xF4ng ph\xE9p trong 2.5 gi\xE2y."'
    },
    meta_data: {
      win_rate: 46.7,
      pick_rate: 6,
      ban_rate: 0.03
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_177",
    name: "Lindis",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/177_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ph\u1EE5c k\xEDch: N\u1ED9i t\u1EA1i: Di chuy\u1EC3n gi\u1EEFa c\xE1c b\u1EE5i c\u1ECF gi\xFAp Lindis t\u0103ng t\u1ED1c ch\u1EA1y tho\xE1ng ch\u1ED1c, \u0111\u1ED3ng th\u1EDDi khi\u1EBFn \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp b\u1EAFn hai l\u1EA7n, m\u1ED7i l\u1EA7n g\xE2y th\xEAm\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s1: 'Nguy\u1EC7t Quang: "N\u1ED9i t\u1EA1i: \u0110\xF2n \u0111\xE1nh th\u1EE9 3 tr\xFAng c\xF9ng m\u1EE5c ti\xEAu s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.Lindis tri\u1EC7u h\u1ED3i m\u1EB7t tr\u0103ng gi\xFAp soi s\xE1ng xung quanh v\xE0 ph\xE1t hi\u1EC7n k\u1EBB \u0111\u1ECBch trong 5 gi\xE2y, t\u1ED1i \u0111a d\u1EF1 tr\u1EEF 2 \u0111i\u1EC3m c\u1ED9ng d\u1ED3n."',
      s2: "Nguy\u1EC7t V\u1EF1c: Lindis t\u1EA1o ra m\u1ED9t c\xE1i b\u1EABy t\u1ED3n t\u1EA1i t\u1ED1i \u0111a 2 ph\xFAt t\u1EA1i \u0111i\u1EC3m \u0111\xE3 ch\u1ECDn. Khi ti\u1EBFp x\xFAc v\u1EDBi k\u1EBB \u0111\u1ECBch chi\u1EBFc b\u1EABy s\u1EBD l\xE0m m\u1EE5c ti\xEAu l\u1ED9 di\u1EC7n \u0111\u1ED3ng th\u1EDDi b\u1ED9c ph\xE1t t\u1EA1o ra m\u1ED9t v\xF9ngl\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD sau tho\xE1ng ch\u1ED1c.Lindis t\u1ED1i \u0111a d\u1EF1 tr\u1EEF \u0111\u01B0\u1EE3c 2 b\u1EABy. Nh\u1EEFng chi\u1EBFc b\u1EABy n\xE0y n\u1EBFu kh\xF4ng b\u1ECB k\xEDch ho\u1EA1t b\u1EDFi k\u1EBB \u0111\u1ECBch s\u1EBD tr\u1EDF n\xEAn t\xE0ng h\xECnh sau 2 gi\xE2y.",
      s3: "Nguy\u1EC7t \u1EA2nh: Lindis tri\u1EC7u h\u1ED3i \u1EA3o \u1EA3nh t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD k\xE8m c\xE1c hi\u1EC7u \u1EE9ng tr\xEAn \u0111\xF2n \u0111\xE1nh. Lindis c\xF3 th\u1EC3 d\u1EF1 tr\u1EEF t\u1ED1i \u0111a 5 \u1EA3o \u1EA3nh, v\xE0 th\u1EDDi gian h\u1ED3i gi\u1EEFa hai l\u1EA7n d\xF9ng \u1EA3o \u1EA3nh li\xEAn ti\u1EBFp\xA0l\xE0 2 gi\xE2y."
    },
    meta_data: {
      win_rate: 48.7,
      pick_rate: 1.23,
      ban_rate: 0.02
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_539",
    name: "Lorion",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/539_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "B\xED thu\u1EADt h\u1EAFc \xE1m: Sau khi Lorion tung chi\xEAu 2 v\xE0 chi\xEAu 3 tr\xFAng m\u1EE5c ti\xEAu, h\u1EAFn s\u1EBD k\xEDch ho\u1EA1t l\xF4i c\u1EA7u. Khi l\xF4i c\u1EA7u b\xEAn ngo\xE0i c\u01A1 th\u1EC3, n\xF3 s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch \xEDt m\xE1u nh\u1EA5t trong ph\u1EA1m vi l\xE2n c\u1EADn  v\xE0 gi\xFAp Lorion h\u1ED3i m\xE1u. Khi l\xF4i c\u1EA7u b\xEAn trong c\u01A1 th\u1EC3 Lorion, n\xF3 s\u1EBD g\xE2y l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng nh\u01B0 tr\xEAn l\xEAn t\u1EA5t c\u1EA3 \u0111\u1ECBch trong ph\u1EA1m vi.",
      s1: "L\u01B0\u1EDBi \u0111i\u1EC7n t\u1EEB: Lorion tung H\u1EAFc l\xF4i c\u1EA7u \u0111\u1EBFn v\u1ECB tr\xED ch\u1EC9 \u0111\u1ECBnh (c\xF3 th\u1EC3 tung 2 l\u1EA7n). L\u1EA7n th\u1EE9 3 c\xF3 th\u1EC3 khi\u1EBFn l\xF4i c\u1EA7u quay v\u1EC1 b\u1EA3n th\xE2n. M\u1ED7i l\u1EA7n l\xF4i c\u1EA7u di chuy\u1EC3n, n\xF3 s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng bay qua. Sau khi tung l\xF4i c\u1EA7u l\u1EA7n 2, n\xF3 s\u1EBD h\xECnh th\xE0nh d\xE2y s\xE9t n\u1ED1i li\u1EC1n v\u1EDBi \u0111i\u1EC3m cu\u1ED1i v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng.",
      s2: "T\u0129nh \u0111i\u1EC7n: Khi l\xF4i c\u1EA7u b\xEAn trong c\u01A1 th\u1EC3, Lorion k\xEDch ho\u1EA1t l\xF4i c\u1EA7u khi\u1EBFn n\xF3 t\u1EF1 \u0111\u1ED9ng t\u1EA5n c\xF4ng t\u1EA5t c\u1EA3 m\u1EE5c ti\xEAu xung quanh h\u1EAFn v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p.\xA0N\u1EBFu l\xF4i c\u1EA7u \u1EDF b\xEAn ngo\xE0i, Lorion c\xF3 th\u1EC3 nhanh ch\xF3ng bi\u1EBFn \u0111\u1EBFn v\u1ECB tr\xED l\xF4i c\u1EA7u v\xE0 g\xE2y l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng ph\xE9p nh\u01B0 tr\xEAn l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi.",
      s3: "B\xE3o t\u1EEB tr\u01B0\u1EDDng: Sau 2 gi\xE2y t\u1EE5 l\u1EF1c, h\u1EAFc l\xF4i c\u1EA7u b\xF9ng n\u1ED5 v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p trong ph\u1EA1m vi \u0111\u1ED3ng th\u1EDDi khi\u1EBFn k\u1EBB \u0111\u1ECBch b\u1ECB kh\xF3a tr\xEAn kh\xF4ng trung."
    },
    meta_data: {
      win_rate: 51.34,
      pick_rate: 7.21,
      ban_rate: 0.22
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_128",
    name: "Lubu",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/128_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Ch\xFAa t\u1EC3: "N\u1ED9i t\u1EA1i: Gi\u1EA3m 1 gi\xE2y h\u1ED3i chi\xEAu c\u1EE7a Ph\u01B0\u01A1ng thi\xEAn h\u1ECDa k\xEDch b\u1EA5t c\u1EE9 khi n\xE0o L\u1EEF B\u1ED1 \u0111\xE1nh tr\xFAng m\u1EE5c ti\xEAu b\u1EB1ng chi\xEAu th\u1EE9c hay \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng.M\u1ED7i l\u1EA7n s\u1EED d\u1EE5ng k\u1EF9 n\u0103ng s\u1EBD t\u0103ng t\u1ED1c \u0111\xE1nh, nhi\u1EC1u nh\u1EA5t c\u1ED9ng d\u1ED3n 10\xA0l\u1EA7n, duy tr\xEC trong th\u1EDDi gian ng\u1EAFn."',
      s1: 'X\xEDch th\u1ED1: "L\u1EEF B\u1ED1 x\xF4ng vPh\u01B0\u01A1ng thi\xEAn h\u1ECDa k\xEDch\u1EC1 ph\xEDa tr\u01B0\u1EDBc, g\xE2y s\xE1t th\u01B0\u01A1ng th\u01B0\u1EDDng. K\u1EF9 n\u0103ng n\xE0y c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng 3 l\u1EA7n li\xEAn ti\u1EBFp v\xE0 v\u01B0\u1EE3t \u0111\u01B0\u1EE3c \u0111\u1ECBah\xECnh. \u0110\xF2n t\u1EA5n c\xF4ng th\u1EE9 L\u1EEF B\u1ED1 vung c\xE2y th\u01B0\u01A1ng xu\u1ED1ng \u0111\u1EC3 ph\xF3ng ra s\xF3ng xung k\xEDch \u0111\u1EBFn nh\u1EEFng k\u1EBB th\xF9, g\xE2y s\xE1t th\u01B0\u01A1ng th\u01B0\u1EDDng v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng.ba s\u1EBD h\u1EA5t k\u1EBB th\xF9 l\xEAn kh\xF4ng v\xE0 l\xE0m cho\xE1ng khi r\u01A1i xu\u1ED1ng."',
      s2: "Ph\u01B0\u01A1ng thi\xEAn h\u1ECDa k\xEDch: L\u1EEF B\u1ED1 vung c\xE2y th\u01B0\u01A1ng xu\u1ED1ng \u0111\u1EC3 ph\xF3ng ra s\xF3ng xung k\xEDch \u0111\u1EBFn nh\u1EEFng k\u1EBB th\xF9, g\xE2y s\xE1t th\u01B0\u01A1ng th\u01B0\u1EDDng v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng.",
      s3: "Chi\u1EBFn th\u1EA7n: L\u1EEF B\u1ED1 c\u01B0\u1EDDng h\xF3a b\u1EA3n th\xE2n, xo\xE1 b\u1ECF m\u1ECDi tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF v\xE0 h\u1ED3i 1 ph\u1EA5n m\xE1u \u0111\xE3 m\u1EA5t, t\u0103ng c\xF4ng v\u1EADt l\xFD v\xE0 kh\xE1ng hi\u1EC7u \u1EE9ng. M\u1ED7i l\u1EA7n d\xF9ng \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng ho\u1EB7c k\u1EF9 n\u0103ng tr\xFAng m\u1EE5c ti\xEAu s\u1EBD h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n, k\xE9o d\xE0i trong 1 th\u1EDDi gian."
    },
    meta_data: {
      win_rate: 46.77,
      pick_rate: 2.02,
      ban_rate: 0.02
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_168",
    name: "Lumburr",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/168_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u1EF6 m\u1EA1nh v\u1EC7 y\u1EBFu: N\u1ED9i t\u1EA1i: Lumburr gia t\u0103ng gi\xE1p v\u1EADt l\xFD v\xE0 gi\xE1p ph\xE9p cho b\u1EA3n th\xE2n v\xE0 \u0111\u1ED3ng \u0111\u1ED9i c\xF3 l\u01B0\u1EE3ng m\xE1u th\u1EA5p nh\u1EA5t trong b\xE1n k\xEDnh 5m xung quanh.",
      s1: "\u0110\u1EA5t b\u1EB1ng d\u1EADy s\xF3ng: Lumburr gi\u1EADn d\u1EEF \u0111\u1EA5m xu\u1ED1ng \u0111\u1EA5t h\u1EA5t v\u0103ng \u0111\u1EA5t \u0111\xE1 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. K\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD ch\u1ECBu suy y\u1EBFu, b\u1ECB gi\u1EA3m s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 ph\xE9p g\xE2y ra (ch\u1EC9 hi\u1EC7u l\u1EF1c v\u1EDBi T\u01B0\u1EDBng) trong th\u1EDDi gian hi\u1EC7u l\u1EF1c.",
      s2: "B\u1EA5t kh\u1EA3 c\u1EA3n ph\xE1: Lumberr x\xF4ng v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi h\u1EA5t v\u0103ng nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu. Sau khi r\u1EDBt xu\u1ED1ng \u0111\u1EA5t n\u1EA1n nh\xE2n s\u1EBD b\u1ECB l\xE0m ch\u1EADm. \u0110\u1ED3ng \u0111\u1ED9i tr\xFAng chi\xEAu s\u1EBD nh\u1EADn l\xE1 ch\u1EAFn\xA0v\xE0 t\u1ED1c ch\u1EA1y trong th\u1EDDi gian hi\u1EC7u l\u1EF1c.",
      s3: "Long tr\u1EDDi l\u1EDF \u0111\u1EA5t: Lumburr n\u1ED5i th\u1ECBnh n\u1ED9 t\u1EA1o ra m\u1ED9t c\u01A1n \u0111\u1ED9ng \u0111\u1EA5t h\u1EA5t v\u0103ng k\u1EBB \u0111\u1ECBch, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Khe n\u1EE9t t\u1ED3n t\u1EA1i trong 1 th\u1EDDi gian, khi\u1EBFn nh\u1EEFng n\u1EA1n nh\xE2n c\xF2n b\xEAn trong s\u1EBD b\u1ECB l\xE0m ch\u1EADm v\xE0 ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD."
    },
    meta_data: {
      win_rate: 50.41,
      pick_rate: 1.15,
      ban_rate: 0.01
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_123",
    name: "Maloch",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/123_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ma V\u01B0\u01A1ng: Chi\xEAu c\u1EE7a Maloch tr\u1EA3m tr\xFAng \u0111\xEDch s\u1EBD khi\u1EBFn Qu\u1EF7 ki\u1EBFm \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a. D\u01B0\u1EDBi tr\u1EA1ng c\u01B0\u1EDDng h\xF3a, Maloch s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n \u0111\u1ED3ng th\u1EDDi h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n.",
      s1: "Qu\u1EF7 Ki\u1EBFm: Maloch vung Qu\u1EF7 ki\u1EBFm ch\xE9m v\u1EC1 h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng. Tung chi\xEAu kh\xF4ng tr\xFAng \u0111\xEDch s\u1EBD m\u1EA5t tr\u1EA1ng th\xE1i c\u01B0\u1EDDng h\xF3a.",
      s2: "\u0110o\u1EA1t h\u1ED3n: Maloch g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 l\xE0m ch\u1EADm \u0111\u1ECBch trong ph\u1EA1m vi ch\u1EC9 \u0111\u1ECBnh. Ngo\xE0i ra h\u1EAFn c\xF2n nh\u1EADn th\xEAm l\xE1 ch\u1EAFn gi\xFAp t\u1EF1 chuy\u1EC3n h\xF3a th\xE0nh m\xE1u.",
      s3: "Luy\u1EC7n ng\u1EE5c: Maloch ch\u1EC9 \u0111\u1ECBnh m\u1ED9t khu v\u1EF1c r\u1ED3i ph\xF3ng v\xFAt l\xEAn kh\xF4ng v\xE0 lao xu\u1ED1ng g\xE2y s\xE1t th\u01B0\u01A1ng \u0111\u1ED3ng th\u1EDDi h\u1EA5t tung \u0111\u1ECBch k\xE8m c\u01B0\u1EDDng h\xF3a ph\xF2ng th\u1EE7 cho b\u1EA3n th\xE2n."
    },
    meta_data: {
      win_rate: 50.01,
      pick_rate: 11.12,
      ban_rate: 0.14
    },
    counters: [
      "Edras",
      "Bijan",
      "Veres"
    ]
  },
  {
    id: "hero_121",
    name: "Marja",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/121_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "H\u1ED3n ch\xFA: Marja tung chi\xEAu s\u1EBD tri\u1EC7u h\u1ED3i n\xF4 b\u1ED9c h\u1EAFc \xE1m t\u1EF1 \u0111\u1ED9ng t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n",
      s1: "S\xF3ng th\u1ED1ng kh\u1ED5: Marja g\xE2y s\xE1t th\u01B0\u01A1ng cho k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng \u0111i. Khi tung chi\xEAu l\u1EA7n n\u1EEFa, Marja s\u1EBD l\u01B0\u1EDBt \u0111\u1EBFn \u0111i\u1EC3m n\u0103ng l\u01B0\u1EE3ng v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng cho k\u1EBB \u0111\u1ECBch xung quanh",
      s2: "Ph\u1EC7 h\u1ED3n tr\xF9ng: Marja k\u1EBFt n\u1ED1i v\u1EDBi k\u1EBB \u0111\u1ECBch \u0111\u1EA7u ti\xEAn b\u1ECB tr\xFAng chi\xEAu, g\xE2y s\xE1t th\u01B0\u01A1ng l\xE0m ch\u1EADm cho ch\xFAng v\xE0 r\xFAt c\xF4ng v\u1EADt l\xFD c\xF9ng c\xF4ng ph\xE9p \u0111\u1ED3ng th\u1EDDi h\u1ED3i ph\u1EE5c m\xE1u cho b\u1EA3n th\xE2n",
      s3: "\xC1c h\u1ED3n: Marja tr\u1EDF n\xEAn kh\xF4ng b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu, x\xF3a m\u1ECDi tr\u1EA1ng th\xE1i ti\xEAu c\u1EF1c v\xE0 nh\u1EADn hi\u1EC7u \u1EE9ng t\u0103ng t\u1ED1c. Khi k\xEDch ho\u1EA1t v\xE0 h\u1EE7y tr\u1EA1ng th\xE1i n\xE0y, t\u01B0\u1EDBng s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng cho k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn"
    },
    meta_data: {
      win_rate: 53.57,
      pick_rate: 10.58,
      ban_rate: 2.43
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_180",
    name: "Max",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/180_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110i\u1EC7n t\xEDch: M\u1ECDi s\xE1t th\u01B0\u01A1ng c\u1EE7a Max khi\u1EBFn c\xE1c m\u1EE5c ti\xEAu r\u01A1i v\xE0o tr\u1EA1ng th\xE1i\xA0\u0110i\u1EC7n t\xEDch,\xA0ch\u1ECBu s\xE1t th\u01B0\u01A1ng chu\u1EA9n\xA0m\u1ED7i gi\xE2y. Su\u1ED1t th\u1EDDi gian n\xE0y, kh\u1EA3 n\u0103ng h\u1ED3i ph\u1EE5c c\u1EE7a n\u1EA1n nh\xE2n b\u1ECB gi\u1EA3m \u0111i",
      s1: "Tay b\xE1n d\u1EABn: Max v\u01B0\u01A1n \u0111\xF4i tay m\xE1y xoay tr\xF2n t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. M\u1ED7i n\u1EA1n nh\xE2n tr\xFAng chi\xEAu gi\xFAp Max nh\u1EADn t\u1ED1c ch\u1EA1y.",
      s2: "\u0110\u1ED9ng c\u01A1 cao th\u1EBF: Max nh\u1EA3y v\u1ECDt qua m\u1EE5c ti\xEAu v\xE0 gi\u1EADt \u0111i\u1EC7n khi\u1EBFn n\u1EA1n nh\xE2n b\u1ECB cho\xE1ng trong tho\xE1ng ch\u1ED1c, \u0111\u1ED3ng th\u1EDDi Max t\u1EF1 t\u1EA1o cho b\u1EA3n th\xE2n m\u1ED9t l\xE1 ch\u1EAFn \u0111i\u1EC7n t\u1EEB gi\xFAp t\u0103ng mi\u1EC5n th\u01B0\u01A1ng. Chi\xEAu th\u1EE9c c\xF3 th\u1EC3 tung l\u1EA7n n\u1EEFa sau 4s",
      s3: 'Ra \u0111a \u0111\u1EA1n \u0111\u1EA1o: Max k\xEDch ho\u1EA1t Ra-\u0111a qu\xE9t k\u1EBB \u0111\u1ECBch, gi\xFAp ph\xE1t hi\u1EC7n m\u1ECDi\xA0t\u01B0\u1EDBng \u0111\u1ECBch\xA0\u0111\u1ED3ng th\u1EDDi ng\u1EAFt qu\xE3ng qu\xE1 tr\xECnh bi\u1EBFn v\u1EC1 c\u1EE7a ch\xFAng. K\xEDch ho\u1EA1t l\u1EA7n 2 \u0111\u1EC3 ch\u1ECDn m\u1EE5c ti\xEAu t\u01B0\u1EDBng \u0111\u1ECBch. Sau \u0111\u1EA5y, Max li\u1EC1n c\u1EA5t c\xE1nh bay v\xFAt \u0111\u1EBFn t\u1EA5n c\xF4ng n\u1EA1n nh\xE2n, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0k\xE8m hi\u1EC7u \u1EE9ng \u0111\u1EA9y l\xF9i.Sau khi \u0111\xE1p xu\u1ED1ng Max nh\u1EADn l\xE1 ch\u1EAFn \u0111i\u1EC7n t\u1EEB gi\xFAp t\u0103ng mi\u1EC5n th\u01B0\u01A1ng v\xE0 kh\xE1ng hi\u1EC7u \u1EE9ng, \u0111\u1ED3ng th\u1EDDi t\u1EA1o ra m\u1ED9t v\xF9ng \u0110i\u1EC7n T\xEDch\xA0khi\u1EBFn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn li\xEAn t\u1EE5c ch\u1ECBu \u1EA3nh h\u01B0\u1EDFng tr\u1EA1ng th\xE1i n\xE0y. Su\u1ED1t qu\xE1 tr\xECnh bay Max c\xF3 th\u1EC3 k\xEDch ho\u1EA1t l\u1EA7n n\u1EEFa \u0111\u1EC3 h\u1EA1 c\xE1nh, v\u1EABn h\u01B0\u1EDFng l\xE1 ch\u1EAFn \u0111i\u1EC7n t\u1EEB"'
    },
    meta_data: {
      win_rate: 48,
      pick_rate: 0.58,
      ban_rate: 0.01
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_119",
    name: "Mganga",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/119_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "T\xE0 thu\u1EADt: N\u1ED9i t\u1EA1i: C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng v\xE0 k\u1EF9 n\u0103ng \u0111\u1EC1u k\xE8m theo hi\u1EC7u \u1EE9ng \u0111\u1ED9c g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 c\u1ED9ng d\u1ED3n 1 \u1EA4n T\xE0 Thu\u1EADt, t\u1ED1i \u0111a 5 \u1EA4n v\xE0 g\xE2y 5 l\u1EA7n s\xE1t th\u01B0\u01A1ng.",
      s1: "\u0110\u1ED9c kh\xED: Mganga t\u1EA1o ra m\u1ED9t lu\u1ED3ng kh\xF3i \u0111\u1ED9c t\u1EA1i v\xF9ng ch\u1EC9 \u0111\u1ECBnh trong 4 gi\xE2y. L\xE0n kh\xF3i n\xE0y d\u1EA7n lan r\u1ED9ng ra g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m hi\u1EC7u \u1EE9ng l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y. Sau m\u1ED9t th\u1EDDi gian, Mganga l\u1EA1i d\u1EF1 tr\u1EEF th\xEAm 1 l\u1ECD thu\u1ED1c \u0111\u1ED9c.",
      s2: "\u0110\u1ED9c t\u1ED1: Mganga ph\xF3ng t\xE0 v\u1EADt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu, \u0111\u1ED3ng th\u1EDDi h\u1ED3i cho b\u1EA3n th\xE2n m\u1ED9t l\u01B0\u1EE3ng m\xE1u. N\u1EBFu m\u1EE5c ti\xEAu l\xE0 t\u01B0\u1EDBng \u0111\u1ED3ng minh, h\u1ECD s\u1EBD \u0111\u01B0\u1EE3c y\u1EC3m d\u1EA5u \u1EA5n gi\xFAp h\u1ED3i m\xE1u.",
      s3: "\u0110\u1ED9c D\u01B0\u1EE3c: Mganga k\xEDch n\u1ED5 t\u1EA5t c\u1EA3 d\u1EA5u \u1EA5n l\xE2n c\u1EADn g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch v\xE0 h\u1ED3i m\xE1u cho t\u01B0\u1EDBng \u0111\u1ED3ng minh. M\u1ED7i d\u1EA5u \u1EA5n c\u1ED9ng d\u1ED3n g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 t\u0103ng th\xEAm 50% hi\u1EC7u l\u1EF1c h\u1ED3i ph\u1EE5c."
    },
    meta_data: {
      win_rate: 50.32,
      pick_rate: 10.57,
      ban_rate: 0.17
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_120",
    name: "Mina",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/120_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "L\u01B0\u1EE1i h\xE1i ph\u1EE5c h\u1EADn: Mina c\xF3 t\u1EF7 l\u1EC7 xoay l\u01B0\u1EE1i h\xE1i m\u1ED7i khi g\xE1nh ch\u1ECBu s\xE1t th\u01B0\u01A1ng, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn.",
      s1: "V\u0169 \u0110i\u1EC7u L\u01B0\u1EE1i H\xE1i: Mina vung l\u01B0\u1EE1i h\xE1i g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn d\u1EF1a tr\xEAn m\xE1u t\u1ED1i \u0111a c\u1EE7a ch\xFAng.",
      s2: "L\u01B0\u1EE1i h\xE1i t\u1EED th\u1EA7n: Mina xoay l\u01B0\u1EE1i h\xE1i c\u1EE7a c\xF4, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 \u0111\u1ED3ng th\u1EDDi k\xE9o k\u1EBB th\xF9 l\u1EA1i g\u1EA7n, l\xE0m ch\u1EADm 50% t\u1ED1c ch\u1EA1y.",
      s3: 'Ma l\u1EF1c b\xF3ng t\u1ED1i: "Mina khi\xEAu kh\xEDch nh\u1EEFng k\u1EBB th\xF9 g\u1EA7n \u0111\xF3, l\xE0m cho ch\xFAng t\u1EA5n c\xF4ng c\xF4 trong 2 gi\xE2y.S\xE1t th\u01B0\u01A1ng g\xE2y ra b\u1EDFi nh\u1EEFng k\u1EBB th\xF9 b\u1ECB khi\xEAu kh\xEDch l\xEAn Mina gi\u1EA3m \u0111i \u0111\xE1ng k\u1EC3."'
    },
    meta_data: {
      win_rate: 50.18,
      pick_rate: 6.98,
      ban_rate: 0.09
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_568",
    name: "Ming",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/568_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "H\u1ED3i huy\u1EBFt tr\u1EA3o: M\u1ED7i 5 gi\xE2y, \u0111\xF3n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 k\xEDch ho\u1EA1t hi\u1EC7u \u1EE9ng \u0111\xE1nh th\u01B0\u1EDDng tr\xEAn ng\u01B0\u1EDDi \u0111\u1ECBch v\u1EC1 h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n v\xE0 \u0111\u1ED3ng \u0111\u1ED9i \u0111\u01B0\u1EE3c li\xEAn k\u1EBFt. \u0110\xE1nh m\u1EE5c ti\xEAu kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng s\u1EBD h\u1ED3i m\xE1u \xEDt h\u01A1n.",
      s1: "B\xED thu\u1EADt c\u01B0\u1EDDng h\xF3a: Th\u1EDDi gian h\u1ED3i chi\xEAu 3s - N\u0103ng l\u01B0\u1EE3ng ti\xEAu hao 50+5/c\u1EA5p chi\xEAuN\xE9m ph\xE1p kh\xED \u0111\u1EC3 k\u1EBFt n\u1ED1i v\u1EDBi \u0111\u1ED3ng \u0111\u1ED9i, n\u1EBFu kh\xF4ng tr\xFAng m\u1EE5c ti\xEAu, ph\xE1p kh\xED s\u1EBD t\u1EF1 \u0111\u1ED9ng t\xECm ki\u1EBFm m\u1ED9t \u0111\u1ED3ng minh trong ph\u1EA1m vi \u0111\u1EC3 k\u1EBFt n\u1ED1i v\xE0 t\u0103ng: 20 + 4/c\u1EA5p chi\xEAu (+10% c\xF4ng ph\xE9p) thu\u1ED9c t\xEDnh t\u1EA5n c\xF4ng ch\xEDnh (1 thu\u1ED9c t\xEDnh t\u1EA5n c\xF4ng ch\xEDnh = 1 c\xF4ng v\u1EADt l\xFD ho\u1EB7c 2 c\xF4ng ph\xE9p) & (10 + 2/c\u1EA5p chi\xEAu)% t\u1ED1c \u0111\xE1nh.K\u1EBB \u0111\u1ECBch ch\u1EA1m v\xE0o s\u1EE3i d\xE2y li\xEAn k\u1EBFt s\u1EBD ph\u1EA3i ch\u1ECBu 30/c\u1EA5p chi\xEAu (+20% c\xF4ng ph\xE9p) s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i 0.5 gi\xE2y.N\u1ED9i t\u1EA1i: B\u1EA3n th\xE2n nh\u1EADn th\xEAm 30 + 6/c\u1EA5p chi\xEAu c\xF4ng v\u1EADt l\xFD, /75 + 15c\u1EA5p chi\xEAu c\xF4ng ph\xE9p v\xE0 (7.5 + 1.5/c\u1EA5p chi\xEAu)% t\u1ED1c ch\u1EA1y",
      s2: "B\xED thu\u1EADt ph\xF2ng ng\u1EF1: Th\u1EDDi gian h\u1ED3i chi\xEAu 3s - N\u0103ng l\u01B0\u1EE3ng ti\xEAu hao 50+5/c\u1EA5p chi\xEAuN\xE9m ph\xE1p kh\xED k\u1EBFt n\u1ED1i k\u1EBB \u0111\u1ECBch, n\u1EBFu kh\xF4ng tr\xFAng s\u1EBD t\u1EF1 \u0111\u1ED9ng t\xECm ki\u1EBFm t\u01B0\u1EDBng \u0111\u1ECBch trong ph\u1EA1m vi \u0111\u1EC3 li\xEAn k\u1EBFt, gi\u1EA3m (15 + 2/c\u1EA5p chi\xEAu)% gi\xE1p v\xE0 kh\xE1ng ph\xE9p c\u1EE7a m\u1EE5c ti\xEAu.K\u1EBB \u0111\u1ECBch ch\u1EA1m v\xE0o d\xE2y x\xEDch m\u1ED7i 0.5 gi\xE2y s\u1EBD ch\u1ECBu 30/c\u1EA5p chi\xEAu (+20% c\xF4ng ph\xE9p) s\xE1t th\u01B0\u01A1ng ph\xE9p.N\u1ED9i t\u1EA1i: B\u1EA3n th\xE2n t\u0103ng (15 + 3/c\u1EA5p chi\xEAu)% gi\xE1p v\xE0 kh\xE1ng ph\xE9p.K\u1EBB \u0111\u1ECBch b\u1ECB li\xEAn k\u1EBFt b\u1EDFi ph\xE1p kh\xED s\u1EBD l\u1ED9 di\u1EC7n.",
      s3: "B\xED thu\u1EADt tr\u01B0\u1EDDng sinh: Th\u1EDDi gian h\u1ED3i chi\xEAu 40-5/c\u1EA5p chi\xEAu - N\u0103ng l\u01B0\u1EE3ng ti\xEAu hao 100+20/c\u1EA5p chi\xEAuSau 0.75 gi\xE2y ni\u1EC7m ch\xFA, Ming s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n l\xEAn k\u1EBB \u0111\u1ECBch b\u1ECB ph\xE1p kh\xED li\xEAn k\u1EBFt ho\u1EB7c h\u1ED3i ph\u1EE5c cho \u0111\u1ED3ng \u0111\u1ED9i \u0111\u01B0\u1EE3c li\xEAn k\u1EBFt.N\u1EBFu ph\xE1p kh\xED li\xEAn k\u1EBFt v\u1EDBi m\u1ED9t m\u1EE5c ti\xEAu: Ming ti\xEAu hao 800 (+150% c\xF4ng ph\xE9p) + 400/c\u1EA5p chi\xEAu m\xE1u c\u1EE7a b\u1EA3n th\xE2n \u0111\u1EC3 g\xE2y l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng chu\u1EA9n t\u01B0\u01A1ng \u0111\u01B0\u01A1ng l\xEAn k\u1EBB \u0111\u1ECBch b\u1ECB li\xEAn k\u1EBFt ho\u1EB7c h\u1ED3i ph\u1EE5c l\u01B0\u1EE3ng m\xE1u t\u01B0\u01A1ng \u0111\u01B0\u01A1ng s\xE1t th\u01B0\u01A1ng chu\u1EA9n cho \u0111\u1ED3ng \u0111\u1ED9i \u0111\u01B0\u1EE3c li\xEAn k\u1EBFt.N\u1EBFu ph\xE1p kh\xED li\xEAn k\u1EBFt v\u1EDBi hai m\u1EE5c ti\xEAu: Ming h\xFAt 800 (+150% c\xF4ng ph\xE9p) + 400/c\u1EA5p chi\xEAu m\xE1u t\u1EEB k\u1EBB \u0111\u1ECBch r\u1ED3i chuy\u1EC3n l\u01B0\u1EE3ng m\xE1u \u0111\xF3 cho \u0111\u1ED3ng \u0111\u1ED9i.Trong th\u1EDDi gian ni\u1EC7m ch\xFA n\u1EBFu t\u1EA5t c\u1EA3 m\u1EE5c ti\xEAu li\xEAn k\u1EBFt b\u1ECB h\u1EA1 g\u1EE5c, Ming s\u1EBD \u0111\u01B0\u1EE3c ho\xE0n tr\u1EA3 70% th\u1EDDi gian h\u1ED3i chi\xEAu. L\u01B0\u1EE3ng m\xE1u Ming \u0111\xE3 ti\xEAu hao s\u1EBD d\u1EA7n h\u1ED3i ph\u1EE5c trong 5 gi\xE2y."
    },
    meta_data: {
      win_rate: 54.56,
      pick_rate: 1.05,
      ban_rate: 0.02
    },
    counters: [
      "Krizzix",
      "Teemee",
      "Dolia"
    ]
  },
  {
    id: "hero_170",
    name: "Moren",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/301700head_B52.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110\u1EA1n c\xF4ng ph\xE1: N\u1ED9i t\u1EA1i: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Moren b\u1EAFn ra \u0111\u1EA1n ph\xE1o c\xF3 hi\u1EC7u \u1EE9ng s\xE1t th\u01B0\u01A1ng di\u1EC7n r\u1ED9ng v\xE0 g\xE2y th\xEAm cho m\u1EE5c ti\xEAu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng 1% m\xE1u t\u1ED1i \u0111a m\u1EE5c ti\xEAu.Khi b\u1EAFn trong tr\u1EA1ng th\xE1i d\u01B0\u1EDBi \u0111\u1EA5t, \u0111\u1EA1n ph\xE1o c\xF3 th\u1EC3 b\u1ECB ch\u1EB7n b\u1EDFi t\u01B0\u1EDBng \u0111\u1ECBch, l\xEDnh \u0111\u1ECBch, qu\xE1i r\u1EEBng.",
      s1: "Si\xEAu \u0111\u1EA1n c\xF4ng ph\xE1: Moren n\u1EA1p \u0111\u1EA1n ph\xE1o c\u01B0\u1EDDng h\xF3a 3 l\u1EA7n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp gi\xFAp gia t\u0103ng ph\u1EA1m vi n\u1ED5 v\xE0 g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Khi b\u1EAFn trong tr\u1EA1ng th\xE1i d\u01B0\u1EDBi \u0111\u1EA5t, \u0111\u1EA1n ph\xE1o c\xF3 th\u1EC3 b\u1ECB ch\u1EB7n b\u1EDFi t\u01B0\u1EDBng \u0111\u1ECBch, l\xEDnh \u0111\u1ECBch, qu\xE1i r\u1EEBng.",
      s2: "\u0110\u1EB1ng kh\xF4ng th\u1EE7 ph\xE1o: Moren n\xE9m l\u1EF1u \u0111\u1EA1n t\u1EA1o ra v\xF9ng kh\xF3i m\xF9 khi\u1EBFn b\u1EA3n th\xE2n v\xE0 \u0111\u1ED3ng \u0111\u1ED9i \u0111\u01B0\u1EE3c \u1EA9n th\xE2n trong 3.5 gi\xE2y. Ngo\xE0i ra Moren c\xF2n c\xF3 th\u1EC3 t\u1EADn d\u1EE5ng s\u1EE9c m\u1EA1nh v\u1EE5 n\u1ED5 \u0111\u1EC3 bay l\xEAn tr\u1EDDi v\xE0 t\u0103ng t\u1ED1c trong 0.8 gi\xE2y \u0111\u1ED3ng th\u1EDDi \u0111\xE1nh th\u01B0\u1EDDng k\xE8m tung chi\xEAu s\u1EBD kh\xF4ng b\u1ECB \u0111\u1ECBa h\xECnh c\u1EA3n tr\u1EDF. Khi \u1EDF tr\xEAn kh\xF4ng trung, \u0111\xE1nh th\u01B0\u1EDDng, tung chi\xEAu 2 (tr\xEAn kh\xF4ng kh\xF4ng c\xF2n n\xE9m bom kh\xF3i) v\xE0 chi\xEAu 3 s\u1EBD k\xE9o d\xE0i th\u1EDDi gian bay.",
      s3: "H\u1ECFa \u0111\u1EA1n truy tung: Moren nh\u1EA3y l\xEAn kh\xF4ng trung nh\u1EADn hi\u1EC7u \u1EE9ng mi\u1EC5n kh\u1ED1ng tho\xE1ng ch\u1ED1c \u0111\u1ED3ng th\u1EDDi kh\xF3a m\u1ED9t t\u01B0\u1EDBng \u0111\u1ECBch v\xE0 b\u1EAFn 5 qu\u1EA3 rocket \u0111\u1ECBnh v\u1ECB v\u1EC1 ph\xEDa n\u1EA1n nh\xE2n. M\u1ED7i vi\xEAn \u0111\u1EA1n s\u1EBD ph\xE1t n\u1ED5 trong ph\u1EA1m vi m\u1EE5c ti\xEAu v\xE0 g\xE2y m\xE1u m\u1EE5c ti\xEAu \u0111\xE3 m\u1EA5t th\xE0nh s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. T\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng nhi\u1EC1u rocket s\u1EBD khi\u1EBFn s\xE1t th\u01B0\u01A1ng t\u1EEB vi\xEAn th\u1EE9 2 gi\u1EA3m c\xF2n 25%; t\u1ED1i \u0111a c\xF3 th\u1EC3 chia 1 rocket cho m\u1ED9t t\u01B0\u1EDBng \u0111\u1ECBch kh\xE1c."
    },
    meta_data: {
      win_rate: 48.88,
      pick_rate: 0.69,
      ban_rate: 0.02
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_131",
    name: "Murad",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/131_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u1EA2nh H\u1ED3n: N\u1ED9i t\u1EA1i: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\xEDch gi\xFAp Murad c\u1ED9ng d\u1ED3n 1 \u1EA2nh h\u1ED3n v\xE0 t\u0103ng xuy\xEAn gi\xE1p. \u0110\u1EE7 4 c\u1ED9ng d\u1ED3n s\u1EBD ph\xE1 phong \u1EA5n c\u1EE7a \u1EA2o \u1EA3nh tr\u1EA3m trong 5 gi\xE2y.",
      s1: "T\xE0n \u1EA2nh \u0110ao: Murad l\u01B0\u1EDBt \u0111i g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m cho\xE1ng l\xEAn nh\u1EEFng n\u1EA1n nh\xE2n tr\xFAng chi\xEAu. Chi\xEAu th\u1EE9c c\xF3 th\u1EC3 tung ra 3 l\u1EA7n, \u0111\u1EB7c bi\u1EC7t \u1EDF l\u1EA7n th\u1EE9 ba Murad s\u1EBD quay tr\u1EDF v\u1EC1 v\u1ECB tr\xED ban \u0111\u1EA7u c\u1EE7a b\u1EA3n th\xE2n.",
      s2: "V\xF4 \u1EA2nh V\u1EF1c: Murad t\u1EA1o ra m\u1ED9t v\xF9ng kh\xF4ng gian g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn t\u1EA5t c\u1EA3 n\u1EA1n nh\xE2n b\xEAn trong ph\u1EA1m vi \u1EA3nh h\u01B0\u1EDFng. Nh\u1EEFng k\u1EBB \u0111\u1ECBch d\u1EA1i d\u1ED9t ch\u1EA1m ph\u1EA3i bi\xEAn gi\u1EDBi v\xF9ng kh\xF4ng gian n\xE0y s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, v\xE0 b\u1ECB l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y trong 2 gi\xE2y, k\xE8m gi\u1EA3m gi\xE1p trong 3 gi\xE2y. Ngay th\u1EDDi \u0111i\u1EC3m k\xEDch ho\u1EA1t chi\xEAu th\u1EE9c Murad s\u1EBD tr\u1EDF n\xEAn kh\xF4ng th\u1EC3 b\u1ECB t\u1EA5n c\xF4ng ho\u1EB7c ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu.",
      s3: '\u1EA2o \u1EA2nh Tr\u1EA3m: "Murad t\u1EA5n c\xF4ng li\xEAn t\u1EE5c 5 \u0111\xF2n \u0111\xE1nh l\xEAn m\u1ECDi k\u1EBB \u0111\u1ECBch trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD m\u1ED7i \u0111\xF2n. Su\u1ED1t th\u1EDDi gian tung chi\xEAu, Murad kh\xF4ng th\u1EC3 b\u1ECB t\u1EA5n c\xF4ng ho\u1EB7c ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu.N\u1EBFu nh\u01B0 c\xF3 nhi\u1EC1u h\u01A1n m\u1ED9t t\u01B0\u1EDBng \u0111\u1ECBch trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng s\u1EBD l\xE0m gi\u1EA3m s\xE1t th\u01B0\u01A1ng v\xE0 t\u1ED1i \u0111a gi\u1EA3m 20%."'
    },
    meta_data: {
      win_rate: 48.82,
      pick_rate: 11.96,
      ban_rate: 1.21
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_150",
    name: "Nakroth",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/150_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Th\u1EA9m ph\xE1n oai nghi\xEAm: N\u1ED9i t\u1EA1i: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng th\u1EE9 4 s\u1EBD h\u1EA5t v\u0103ng m\u1EE5c ti\xEAu. Tung chi\xEAu tr\xFAng \u0111\u1ECBch ho\u1EB7c d\xF9ng Ngu\u1ED3n c\u01A1n r\u1EAFc r\u1ED1i s\u1EBD t\u0103ng t\u1ED1c \u0111\xE1nh.",
      s1: "B\u1ED3i th\u1EA9m \u0111o\xE0n: Nakroth x\xF4ng v\u1EC1 ph\xEDa tr\u01B0\u1EDBc, h\u1EA5t v\u0103ng m\u1EE5c ti\xEAu g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. K\u1EF9 n\u0103ng n\xE0y c\xF3 th\u1EC3 tung ra m\u1ED9t l\u1EA7n n\u1EEFa mi\u1EC5n ph\xED\xA0trong v\xF2ng 5 gi\xE2y.",
      s2: "Ngu\u1ED3n c\u01A1n r\u1EAFc r\u1ED1i: Nakroth bi\u1EBFn v\u1EC1 ph\xEDa sau v\xE0 bi\u1EBFn\xA0\u0111\xF2n t\u1EA5n c\xF4ng v\u1EADt l\xFD ti\u1EBFp theo c\u1EE7a m\xECnh trong 3 gi\xE2y\xA0th\xE0nh\xA0\u0111\xF2n qu\xE9t g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s3: "G\u01B0\u01A1m h\xE0nh quy\u1EBFt: Nakroth vung l\u01B0\u1EE1i g\u01B0\u01A1m c\u1EE7a m\xECnh l\xEAn nh\u1EEFng k\u1EBB th\xF9 trong ph\u1EA1m vi g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD m\u1ED7i l\u1EA7n. H\u1EAFn kh\xF4ng th\u1EC3 b\u1ECB kh\u1ED1ng ch\u1EBF.\xA0\u0110\xF2n\xA0\u0111\xE1nh cu\u1ED1i c\xF9ng s\u1EBD h\u1EA5t v\u0103ng k\u1EBB\xA0\u0111\u1ECBch\xA0."
    },
    meta_data: {
      win_rate: 49.73,
      pick_rate: 18.34,
      ban_rate: 0.47
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_142",
    name: "Natalya",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/142_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\xC2m ho\u1EA3: N\u1ED9i t\u1EA1i: d\xF9ng k\u1EF9 n\u0103ng s\u1EBD g\xE2y th\xEAm\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p cho \u0111\u1ECBch, c\xF3 th\u1EC3 c\u1ED9ng d\u1ED3n t\u1ED1i \u0111a 10 l\u1EA7n trong 3 gi\xE2y.",
      s1: "\xC1c Qu\u1EF7 T\u1EE5 H\u1ED9i: Natalya tri\u1EC7u h\u1ED3i 5 b\xF3ng ma t\u1EA5n c\xF4ng n\u01A1i ch\u1EC9 \u0111\u1ECBnh, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p. M\u1EE5c ti\xEAu tr\xFAng nhi\u1EC1u b\xF3ng ma s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EDBi c\xE1c b\xF3ng ma sau. C\xE1c b\xF3ng ma tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD bi\u1EBFn m\u1EA5t ngay sau \u0111\xF3,\xA0gi\xFAp Natalya gi\u1EA3m h\u1ED3i chi\xEAu v\xE0 h\u1ED3i l\u1EA1i 1 ph\u1EA7n n\u0103ng l\u01B0\u1EE3ng.",
      s2: "Qu\u1EA3 C\u1EA7u H\u1EAFc \xC1m: Natalya tung ra m\u1ED9t qu\u1EA3 c\u1EA7u n\u0103ng l\u01B0\u1EE3ng g\xE2y cho\xE1ng n\u1EBFu bay h\u1EBFt t\u1EA7m ho\u1EB7c tr\xFAng k\u1EBB \u0111\u1ECBch \u0111\u1EA7u ti\xEAn, r\u1ED3i ti\u1EBFp t\u1EE5c l\u01A1 l\u1EEDng th\xEAm tho\xE1ng ch\u1ED1c khi\u1EBFn c\xE1c n\u1EA1n nh\xE2n trong t\u1EA7m \u1EA3nh h\u01B0\u1EDFng ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0li\xEAn t\u1EE5c 5 l\u1EA7n v\xE0 b\u1ECB l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y.",
      s3: "Tia s\xE1ng t\u1EED vong: Natalya t\u1EADp trung n\u0103ng l\u01B0\u1EE3ng ph\xF3ng ra m\u1ED9t lu\u1ED3ng n\u0103ng l\u01B0\u1EE3ng ch\u1EBFt ch\xF3c g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i 0.25 gi\xE2y, \u0111\u1ED3ng th\u1EDDi nh\u1EADn \u0111\u01B0\u1EE3c m\u1ED9t l\u1EDBp l\xE1 ch\u1EAFn gi\xFAp mi\u1EC5n d\u1ECBch tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF v\xE0 ch\u1EB7n s\xE1t th\u01B0\u01A1ng th\u1EDDi gian hi\u1EC7u l\u1EF1c. Natalya s\u1EBD x\xF3a to\xE0n b\u1ED9 hi\u1EC7u \u1EE9ng kh\u1ED1ng ch\u1EBF tr\xEAn b\u1EA3n th\xE2n, \u0111\u1ED3ng th\u1EDDi mi\u1EC5n nhi\u1EC5m v\u1EDBi ch\xFAng ch\u1EEBng n\xE0o chi\u1EBFc khi\xEAn c\xF2n t\u1ED3n t\u1EA1i."
    },
    meta_data: {
      win_rate: 46.77,
      pick_rate: 24.66,
      ban_rate: 0.64
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_114",
    name: "Omega",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/114_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ch\u1EBF \u0111\u1ED9 ph\xE1 ho\u1EA1i: N\u1ED9i t\u1EA1i: C\xE1c k\u0129 n\u0103ng c\u1EE7a Omega g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n l\xEAn c\xF4ng tr\xECnh",
      s1: "Ch\u1EBF \u0111\u1ED9 xung phong: Sau khi k\xEDch ho\u1EA1t, Omega t\u1EA1o khi\xEAn ch\u1EAFn h\u1EA5p th\u1EE5 s\xE1t th\u01B0\u01A1ng v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y trong 3 gi\xE2y. \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng ti\u1EBFp theo c\u1EE7a h\u1EAFn s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t tung m\u1EE5c ti\xEAu c\xF9ng n\u1EA1n nh\xE2n l\xE2n c\u1EADn.",
      s2: "Ch\u1EBF \u0111\u1ED9 nghi\u1EC1n n\xE1t: Omega x\xF4ng t\u1EDBi nh\u1EEFng k\u1EBB th\xF9 trong ph\u1EA1m vi, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m cho\xE1ng ch\xFAng.",
      s3: "Ch\u1EBF \u0111\u1ED9 hu\u1EF7 di\u1EC7t: Omega m\u1EDF r\u1ED9ng hai c\xE1nh tay, li\xEAn t\u1EE5c t\u1EA5n c\xF4ng nh\u1EEFng k\u1EBB th\xF9 g\u1EA7n \u0111\xF3 v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD m\u1ED7i l\u01B0\u1EE3t \u0111\u1ED3ng th\u1EDDi \u0111\u1EA9y lui ch\xFAng."
    },
    meta_data: {
      win_rate: 48.42,
      pick_rate: 1.02,
      ban_rate: 0.02
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_506",
    name: "Omen",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/506_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "S\xE1t kh\xED: N\u1ED9i t\u1EA1i: C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\xEDch gi\xFAp Omen nh\u1EADn m\u1ED9t \u0111i\u1EC3m t\xEDch l\u0169y s\xE1t kh\xED. \u0110\u1EA1t \u0111\u1EE7 5 \u0111i\u1EC3m s\u1EBD ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i c\u01B0\u1EDDng h\xF3a, gi\xFAp t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 t\u1ED1c \u0111\xE1nh, \u0111\u1ED3ng th\u1EDDi \u0111\xF2n \u0111\xE1nh g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n v\xE0 gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu c\u1EE7a chi\xEAu 1 v\xE0 chi\xEAu 2 \u0111i 1 gi\xE2y.Hi\u1EC7u \u1EE9ng k\xE9o d\xE0i 5 gi\xE2y. M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u1EE9 ba c\u1EE7a Omen s\u1EBD t\u1EA5n c\xF4ng hai l\u1EA7n, g\xE2y th\xEAm c\xF4ng v\u1EADt l\xFD. B\u1ED9 \u0111\u1EBFm s\u1EBD \u0111\u1EBFm l\u1EA1i khi Omen \u0111\u1EE7 5 \u0111i\u1EC3m s\xE1t kh\xED ho\u1EB7c khi k\u1EBFt th\xFAc tr\u1EA1ng th\xE1i c\u01B0\u1EDDng h\xF3a.",
      s1: "S\xE1t ki\u1EBFm: Omen tung ki\u1EBFm k\xE9o k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc l\u1EA1i g\u1EA7n b\u1EA3n th\xE2n , g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n.",
      s2: "S\xE1t ni\u1EC7m: Khao kh\xE1t mu\u1ED1n ti\xEAu di\u1EC7t t\u1EA5t c\u1EA3 bao ph\u1EE7 l\u1EA5y Omen, gi\xFAp h\u1EAFn t\u0103ng mi\u1EC5n th\u01B0\u01A1ng v\xE0 t\u1ED1c ch\u1EA1y trong 2 gi\xE2y. Su\u1ED1t th\u1EDDi gian n\xE0y, c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a t\u01B0\u1EDBng \u0111\u1ECBch\xA0l\xEAn Omen s\u1EBD b\u1ECB b\u1EAFn ng\u01B0\u1EE3c v\u1EC1 ch\xEDnh ch\u1EE7, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n (k\xE8m hi\u1EC7u \u1EE9ng \u0111\xE1nh th\u01B0\u1EDDng\xA0t\u1EEB Omen). M\u1ED7i k\u1EBB \u0111\u1ECBch ch\u1EC9 ch\u1ECBu b\u1EAFn ng\u01B0\u1EE3c m\u1ED9t l\u1EA7n. \u0110\xF2n b\u1EAFn ng\u01B0\u1EE3c l\xE0m t\u0103ng s\xE1t kh\xED.",
      s3: "S\xE1t v\u1EF1c: Omen lao \u0111\u1EBFn t\u01B0\u1EDBng \u0111\u1ECBch \u0111\u1EA7u ti\xEAn tr\xFAng chi\xEAu g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi t\u1EA1o ra m\u1ED9t \u0111\u1EA5u tr\u01B0\u1EDDng t\u1EED vong khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB gi\u1EA3m s\xE1t th\u01B0\u01A1ng g\xE2y ra, v\xE0 kh\xF4ng th\u1EC3 tr\u1ED1n tho\xE1t trong 5 gi\xE2y."
    },
    meta_data: {
      win_rate: 46.57,
      pick_rate: 2.73,
      ban_rate: 0.02
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_117",
    name: "Ormarr",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/117_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Man l\u1EF1c: N\u1ED9i t\u1EA1i: T\u1EA5t c\u1EA3 s\xE1t th\u01B0\u01A1ng c\u1EE7a Ormarr \u0111\u1EC1u c\xF3 t\u1EF7 l\u1EC7 l\xE0m cho\xE1ng v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p b\u1EB1ng\xA01 s\u1ED1 m\xE1u t\u1ED1i \u0111a c\u1EE7a h\u1EAFn\xA0(6\xA0gi\xE2y h\u1ED3i).",
      s1: "B\xFAa Cu\u1ED3ng: Ormarr l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc vung b\xFAa h\u1EA5t tung m\u1EE5c ti\xEAu, g\xE2y ra s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD",
      s2: "B\xFAa t\u1EA1: Ormarr n\u1EC7n b\xFAa xu\u1ED1ng \u0111\u1EA5t g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 gi\u1EA3m t\u1ED1c ch\u1EA1y k\u1EBB \u0111\u1ECBch. M\u1ED7i l\u1EA7n tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD t\u1EF1 c\u1ED9ng cho b\u1EA3n 1 \u0111i\u1EC3m Chi\u1EBFn d\xE3. \u0110\u1EA1t \u0111\u1EBFn 3 \u0111i\u1EC3m, n\u1EBFu d\xF9ng k\u1EF9 n\u0103ng s\u1EBD g\xE2y cho\xE1ng k\u1EBB \u0111\u1ECBch.",
      s3: "Hi\xEAn ngang: V\u0169 kh\xED tr\xEAn tay Ormarr xoay v\xF2ng c\u1EF1c nhanh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0m\u1ED7i \u0111\u1EE3t l\xEAn k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu.  N\u1EBFu c\xF3 t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD khi\u1EBFn Ormarr \u0111\u01B0\u1EE3c h\u1ED3i 2% m\xE1u t\u1ED1i \u0111a c\u1EE7a b\u1EA3n th\xE2n. Su\u1ED1t th\u1EDDi gian n\xE0y Ormarr kh\xF4ng th\u1EC3 b\u1ECB ng\u1EAFt qu\xE3ng chi\xEAu v\xE0 c\xF3 th\u1EC3 s\u1EED d\u1EE5ng B\xFAa cu\u1ED3ng, nh\u01B0ng v\u1EABn c\xF3 th\u1EC3 b\u1ECB l\xE0m ch\u1EADm."
    },
    meta_data: {
      win_rate: 49.69,
      pick_rate: 1.33,
      ban_rate: 0.01
    },
    counters: [
      "Xeniel",
      "Y'Bneth",
      "Roxie"
    ]
  },
  {
    id: "hero_137",
    name: "Paine",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/137_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Tr\u1EA3m h\u1ED3n: Sau m\u1ED7i l\u1EA7n tung chi\xEAu, trong 4 gi\xE2y k\u1EBF c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Paine s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Trong \u0111\xF3 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng \u0111\u1EA7u ti\xEAn s\u1EBD chuy\u1EC3n th\xE0nh \u0111\u1ED9t k\xEDch sau l\u01B0ng k\u1EBB \u0111\u1ECBch v\xE0 g\xE2y g\u1EA5p \u0111\xF4i s\xE1t th\u01B0\u01A1ng.",
      s1: "H\u1ED3n g\u1ECDi x\xE1c: Paine xu\u1EA5t h\u1ED3n theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p cho k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng xuy\xEAn qua \u0111\u1ED3ng th\u1EDDi \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng ch\u1EBF. Khi chi\xEAu k\u1EBFt th\xFAc ho\u1EB7c \u1EA5n k\u1EBFt th\xFAc, th\u1EC3 x\xE1c Paine s\u1EBD lao nhanh \u0111\u1EBFn v\u1ECB tr\xED linh h\u1ED3n c\u1EE7a h\u1EAFn v\xE0 g\xE2y ti\u1EBFp s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng lao \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm k\u1EBB \u0111\u1ECBch.",
      s2: "Vong h\u1ED3n tr\u1EADn: Paine tung ra m\u1ED9t v\xF2ng s\xE1ng ma h\u1ED3n g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi v\xE0 khi\u1EBFn ch\xFAng c\xE2m l\u1EB7ng. N\u1EBFu 2 gi\xE2y sau khi tung chi\xEAu Paine v\u1EABn c\xF2n trong v\xF2ng s\xE1ng ma h\u1ED3n th\xEC h\u1EAFn s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i n\u1ED9i n\u0103ng.N\u1ED9i t\u1EA1i chi\xEAu: Khi Paine ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p, trong 5 gi\xE2y s\u1EBD chuy\u1EC3n h\xF3a l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng n\xE0y th\xE0nh m\xE1u cho b\u1EA3n th\xE2n",
      s3: "Di\u1EC7t h\u1ED3n truy: Sau khi t\u1EE5 l\u1EF1c, Paine trong th\u1EDDi gian ng\u1EAFn nh\u1EADn mi\u1EC5n th\u01B0\u01A1ng v\xE0 lao \u0111\u1EBFn \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh \u0111\u1ED3ng th\u1EDDi g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. Ngo\xE0i ra nh\u1EEFng k\u1EBB \u0111\u1ECBch \u0111\u1EE9ng tr\xEAn \u0111\u01B0\u1EDDng lao s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p."
    },
    meta_data: {
      win_rate: 48.44,
      pick_rate: 5.28,
      ban_rate: 0.07
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_148",
    name: "Preyta",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/148_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "R\u1ED3ng d\u1ECBch b\xEAnh: Preyta: V\u1EADt c\u01B0\u1EE1i gi\xFAp t\u0103ng t\u1ED1c ch\u1EA1y c\u1EE7a Preyta.",
      s1: 'H\u01A1i \u0111\u1ED9c h\u1EA1i: "Preyta ni\u1EC7m ch\xFA 2 gi\xE2y t\u1EADp trung to\xE0n b\u1ED9 n\u0103ng l\u01B0\u1EE3ng \u0111\u1EC3 ph\xE1t t\xE1n d\u1ECBch b\u1EC7nh theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh. Trong th\u1EDDi gian n\xE0y n\u1EBFu th\u1EE9c hi\u1EC7n b\u1EA5t k\u1EF3 \u0111\u1ED9ng t\xE1c g\xEC kh\xE1c s\u1EBD khi\u1EBFn chi\xEAu th\u1EE9c \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t ngay l\u1EADp t\u1EE9c, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p.Khi Preyta trong tr\u1EA1ng th\xE1i Si\xEAu khu\u1EA9n, h\u1EAFn \u0111\u1EC3 l\u1EA1i m\u1ED9t c\xE1i b\xF3ng ni\u1EC7m ch\xFA h\u1ED9."',
      s2: 'Bom ho\u1EA1i t\u1EED: "Preyta t\u1EA1o ra m\u1ED9t v\u1EE5 n\u1ED5 d\u1ECBch b\u1EC7nh \u0111\u1EA9y l\xF9i k\u1EBB \u0111\u1ECBch trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m hi\u1EC7u \u1EE9ng l\xE0m ch\u1EADm.Trong tr\u1EA1ng th\xE1i Si\xEAu khu\u1EA9n, v\u1EE5 n\u1ED5 c\xF2n g\xE2y k\xE8m hi\u1EC7u \u1EE9ng l\xE0m cho\xE1ng."',
      s3: 'D\u1ECBch H\u1EA1ch: "Preyta ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i Si\xEAu khu\u1EA9n, t\u1EA1o l\xE1 ch\u1EAFn, l\xE0m m\u1EDBi h\u1ED3i chi\xEAu v\xE0 c\u01B0\u1EDDng h\xF3a H\u01A1i \u0111\u1ED9c h\u1EA1i v\xE0 Bom ho\u1EA1i t\u1EED k\u1EBF ti\u1EBFp.Trong th\u1EDDi gian hi\u1EC7u l\u1EF1c, Preyta c\xF2n \u0111\u01B0\u1EE3c t\u0103ng t\u1EA7m \u0111\xE1nh, t\u1ED1c ch\u1EA1y, t\u1ED1c \u0111\xE1nh v\xE0 khi\u1EBFn \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p di\u1EC7n r\u1ED9ng."'
    },
    meta_data: {
      win_rate: 55.57,
      pick_rate: 0.7,
      ban_rate: 0.02
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_528",
    name: "Qi",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/528_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ch\xE2n kh\xED h\u1ED9 th\u1EC3: Qi gi\u1EA3i ph\xF3ng ch\xE2n kh\xED h\u1ED9 th\u1EC3.N\u1EBFu chi\xEAu th\u1EE9c \u0111\xE1nh tr\xFAng k\u1EBB \u0111\u1ECBch, 2 l\u1EA7n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi h\u1ED3i ph\u1EE5c m\xE1u.",
      s1: "Truy tinh ch\u01B0\u1EDFng: Qi l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch \u0111\u1EE9ng tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt \u0111\u1ED3ng th\u1EDDi h\u1EA5t tung \u0111\u1ECBch.",
      s2: "Ch\u1EA5n thi\xEAn ch\u01B0\u1EDFng: Qi d\xF9ng ch\xE2n kh\xED \u0111\xE1nh li\xEAn ti\u1EBFp v\xE0o k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc, m\u1ED7i \u0111\xF2n \u0111\xE1nh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 gi\u1EA3m gi\xE1p c\u1EE7a \u0111\u1ECBch.",
      s3: "H\u1EA1o nhi\xEAn ch\u01B0\u1EDFng: Qi xu\u1EA5t ch\u01B0\u1EDFng v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 \u0111\xE1nh lui \u0111\u1ECBch. K\u1EBB \u0111\u1ECBch b\u1ECB \u0111\xE1nh lui va v\xE0o \u0111\u1ECBa h\xECnh s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 cho\xE1ng. Sau \u0111\xF3 Qi c\xF3 th\u1EC3 l\u01B0\u1EDBt ti\u1EBFp theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt."
    },
    meta_data: {
      win_rate: 51.88,
      pick_rate: 8.23,
      ban_rate: 0.05
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_518",
    name: "Quillen",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/518_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110\xE1nh l\xE9n: Nh\u1EEFng \u0111\xF2n \u0111\xE1nh v\xE0 chi\xEAu th\u1EE9c t\u1EA5n c\xF4ng t\u1EEB ph\xEDa sau k\u1EBB \u0111\u1ECBch ch\u1EAFc ch\u1EAFn g\xE2y ch\xED m\u1EA1ng.  Tuy nhi\xEAn s\xE1t th\u01B0\u01A1ng ch\xED m\u1EA1ng kh\u1EDFi \u0111i\u1EC3m c\u1EE7a h\u1EAFn ch\u1EC9 l\xE0 125% (t\u0103ng 0.5% theo m\u1ED7i 0.5% t\u1EF7 l\u1EC7 ch\xED m\u1EA1ng Quillen c\xF3).T\u1EA5n c\xF4ng tr\u01B0\u1EDBc m\u1EB7t ch\u1EAFc ch\u1EAFn kh\xF4ng ch\xED m\u1EA1ng",
      s1: "Ch\xE9m \u0111\xF4i: Quillen ch\xE9m ch\u1EDBp nho\xE1ng hai l\u1EA7n theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s2: "\u0110o\u1EA3n m\u1EC7nh: Quillen l\u01B0\u1EDBt \u0111i, khi \u0111\u1EBFn \u0111\xEDch l\u1EADp t\u1EE9c t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 \u0111\xE1nh d\u1EA5u n\xF3 trong 10 gi\xE2y (ch\u1EC9 c\xF3 th\u1EC3 \u0111\xE1nh d\u1EA5u m\u1ED9t k\u1EBB \u0111\u1ECBch m\u1ED7i l\u1EA7n). M\u1ED7i l\u1EA7n Quillen c\xF4ng k\xEDch n\u1EA1n nh\xE2n b\u1ECB \u0111\xE1nh d\u1EA5u s\u1EBD l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y trong 1 gi\xE2y, v\xE0 gi\u1EA3m 1 gi\xE2y h\u1ED3i chi\xEAu n\xE0y. K\u1EBB \u0111\u1ECBch ch\u1ECBu d\u1EA5u \u1EA5n s\u1EBD b\u1ECB gi\u1EA3m s\xE1t th\u01B0\u01A1ng g\xE2y ra l\xEAn Quillen.",
      s3: "\u1EA8n s\xE1t: Quillen l\u0103n m\u1ED9t v\xF2ng, sau \u0111\xF3 t\xE0ng h\xECnh trong 3 gi\xE2y, t\u0103ng t\u1ED1c ch\u1EA1y v\xE0 h\u1ED3i m\xE1u m\u1ED7i 0.5 gi\xE2y. Su\u1ED1t th\u1EDDi gian n\xE0y, n\u1EBFu Quillen t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch s\u1EBD hi\u1EC7n h\xECnh v\xE0 c\u01B0\u1EDDng ho\xE1 b\u1EA3n th\xE2n trong 3 gi\xE2y k\u1EBF ti\u1EBFp.C\u01B0\u1EDDng ho\xE1: Quillen nh\u1EADn c\xF4ng v\u1EADt l\xFD, v\xE0 t\u1ED1c ch\u1EA1y m\u1ED7i khi g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn k\u1EBB \u0111\u1ECBch.N\u1ED9i t\u1EA1i: Ph\u1EE5 ho\u1EB7c h\u1EA1 g\u1EE5c t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD l\xE0m m\u1EDBi h\u1ED3i chi\xEAu c\u1EE7a to\xE0n b\u1ED9 k\u1EF9 n\u0103ng"
    },
    meta_data: {
      win_rate: 47.96,
      pick_rate: 2.91,
      ban_rate: 0.02
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_157",
    name: "Raz",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/157_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: '\u0110\u1EA5m V\xE0 L\xE1ch: "N\u1ED9i t\u1EA1i - L\xE1ch: Sau khi tung chi\xEAu th\u1EE9c Raz c\xF3 th\u1EC3 l\u1EADp t\u1EE9c l\xE1ch b\u01B0\u1EDBc v\u1EDBi t\u1ED1c \u0111\u1ED9 di chuy\u1EC3n c\u1EF1c cao.N\u1ED9i t\u1EA1i - \u0110\u1EA5m: C\xFA \u0111\u1EA5m \u0111\u1EA7u ti\xEAn v\xE0 c\xFA \u0111\u1EA5m th\u1EE9 ba g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m hi\u1EC7u \u1EE9ng \u0111\u1EA9y l\xF9i \u0111\u1ECBch."',
      s1: 'C\xFA \u0110\u1EA5m Th\u0103ng Hoa: "Raz lao t\u1EDBi tung m\u1ED9t c\xFA \u0111\u1EA5m m\xF3c \u0111\u1EA7y uy l\u1EF1c l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m hi\u1EC7u \u1EE9ng h\u1EA5t tung.Chi\xEAu th\u1EE9c tung tr\xFAng \u0111\xEDch gi\xFAp h\u1ED3i n\u1ED9i n\u0103ng."',
      s2: 'C\xFA \u0110\u1EA5m Ch\xE2n Kh\xF4ng: "Raz vung tay m\u1EA1nh \u0111\u1EBFn m\u1EE9c s\u1EE9c gi\xF3 c\u1EE7a c\xFA \u0111\u1EA5m g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m hi\u1EC7u \u1EE9ng l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y v\xE0 gi\u1EA3m gi\xE1p ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch \u0111\u1EA7u ti\xEAn tr\xFAng ph\u1EA3i.Chi\xEAu th\u1EE9c tung tr\xFAng \u0111\xEDch gi\xFAp h\u1ED3i n\u1ED9i n\u0103ng."',
      s3: 'T\u1EA3 Xung H\u1EEFu \u0110\u1ED9t: "Raz \u1EE7i ng\u01B0\u1EDDi v\u1EC1 ph\xEDa tr\u01B0\u1EDBc tung ra m\u1ED9t c\xFA \u0111\u1EA5m b\u1ED9c ph\xE1, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p, k\xE8m hi\u1EC7u \u1EE9ng \u0111\u1EA9y l\xF9i l\xEAn k\u1EBB tr\xFAng chi\xEAuChi\xEAu tr\xFAng \u0111\xEDch gi\xFAp h\u1ED3i n\u1ED9i n\u0103ng."'
    },
    meta_data: {
      win_rate: 47.45,
      pick_rate: 21.02,
      ban_rate: 0.73
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_515",
    name: "Richter",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/515_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Thanh g\u01B0\u01A1m bi\u1EBFn \u1EA3o: \u1EDE c\xE1c m\xF4i tr\u01B0\u1EDDng kh\xE1c nhau h\u01A1n 1.5 gi\xE2y s\u1EBD gi\xFAp c\u01A1 th\u1EC3 th\xEDch nghi v\xE0 c\u01B0\u1EDDng ho\xE1 b\u1EA3n th\xE2n. M\u1ED7i l\u1EA7n chuy\u1EC3n tr\u1EA1ng th\xE1i s\u1EBD gi\xFAp Richter t\u0103ng t\u1ED1c trong tho\xE1ng ch\u1ED1c.B\u1EE5i c\u1ECF: T\u0103ng t\u1ED1c \u0111\xE1nhD\u01B0\u1EDBi s\xF4ng: T\u0103ng t\u1ED1c ch\u1EA1yTr\xEAn \u0111\u01B0\u1EDDng: T\u0103ng mi\u1EC5n th\u01B0\u01A1ng.",
      s1: "Ch\u1EB7t & ch\xE9m: Richter l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2ys\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi g\xE2y hi\u1EC7u \u1EE9ng tu\u1EF3 theo m\xE0u g\u01B0\u01A1m hi\u1EC7n c\xF3G\u01B0\u01A1m xanh l\xE1: h\u1EA5t tung m\u1EE5c ti\xEAuG\u01B0\u01A1m xanh: t\u0103ng t\u1EA7m l\u01B0\u1EDBt v\xE0 g\xE2y l\xE0m ch\u1EADmG\u01B0\u01A1m \u0111\u1ECF: H\u1EA5t tung v\xE0 g\xE2y m\xE1u t\u1ED1i \u0111a c\u1EE7a k\u1EBB \u0111\u1ECBchCh\u01B0a h\u1EBFt, Richter vung g\u01B0\u01A1m ch\xE9m ti\u1EBFp g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, r\u1ED3i bi\u1EBFn \u0111\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9pN\u1EBFu chi\xEAu th\u1EE9c tr\xFAng k\u1EBB \u0111\u1ECBch s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i l\u1EA1i ngay l\u1EADp t\u1EE9c. Hi\u1EC7u \u1EE9ng n\xE0y ch\u1EC9 x\u1EA3y ra m\u1ED7i 4 gi\xE2y m\u1ED9t l\u1EA7n.",
      s2: ": Richter hu\u01A1 g\u01B0\u01A1m ph\xF2ng th\u1EE7 gi\xFAp b\u1EA3n th\xE2n mi\u1EC5n nhi\u1EC5m m\u1ECDi tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF v\xE0 s\xE1t th\u01B0\u01A1ng trong 0.75 gi\xE2y (c\xF3 th\u1EC3 di chuy\u1EC3n b\xECnh th\u01B0\u1EDDng). V\u1EEBa h\u1EBFt th\u1EDDi gian, Richter l\u1EADp t\u1EE9c t\u1EA5n c\xF4ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.\xA0T\xEDch tr\u1EEF t\u1ED1i \u0111a 2 c\u1ED9ng d\u1ED3n N\u1EBFu Richter \u0111ang c\xF3 G\u01B0\u01A1m v\xE0ng v\xE0 ch\u1EB7n th\xE0nh c\xF4ng m\u1ED9t hi\u1EC7u \u1EE9ng kh\u1ED1ng ch\u1EBF th\xEC h\u1EAFn s\u1EBD g\xE2y cho\xE1ng m\u1EE5c ti\xEAu 1 gi\xE2y",
      s3: "V\xF9ng di\u1EC7t qu\u1EF7: Richter tung chi\xEAu, kh\u1EAFc d\u1EA5u \u1EA5n di\u1EC7t qu\u1EF7 l\xEAn k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, \u0111\u1ED3ng th\u1EDDi t\u1EA1o ra m\u1ED9t v\xF9ng g\xE2y\xA0s\xE1t th\u01B0\u01A1ng chu\u1EA9n\xA0v\xE0 l\xE0m ch\u1EADm m\u1ED7i 0.5 gi\xE2y trong 5 gi\xE2y. C\xE1c n\u1EA1n nh\xE2n tr\xFAng d\u1EA5u \u1EA5n n\u1EBFu ch\u1ECBu 5 \u0111\u1EE3t s\xE1t th\u01B0\u01A1ng t\u1EEB chi\xEAu th\u1EE9c n\xE0y s\u1EBD nh\u1EADn s\xE1t th\u01B0\u01A1ng chu\u1EA9n, \u0111\u1ED3ng th\u1EDDi b\u1ECB c\xE2m l\u1EB7ng 1 gi\xE2y."
    },
    meta_data: {
      win_rate: 47.27,
      pick_rate: 4.6,
      ban_rate: 0.03
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_191",
    name: "Rouie",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/191_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Quang t\u1ED1c: Rouie t\u0103ng t\u1ED1c ch\u1EA1y cho b\u1EA3n th\xE2n v\xE0 \u0111\u1ED3ng \u0111\u1ED9i g\u1EA7n nh\u1EA5t trong ph\u1EA1m vi.",
      s1: "Th\u1EA7n c\u1EA3nh/Th\u1EA7n \u1EA5n: Th\u1EA7n c\u1EA3nh (ST l\u1EA7n 1): Rouie tri\u1EC7u h\u1ED3i tr\u1EADn ph\xE1p Th\u1EA7n c\u1EA3nh t\u1EA1i v\u1ECB tr\xED ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi v\xE0 l\xE0m ch\xFAng c\xE2m l\u1EB7ng.Th\u1EA7n \u1EA5n (ST l\u1EA7n 2: Rouie tri\u1EC7u h\u1ED3i th\u1EA7n \u1EA5n theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 \u0111\u1EA9y l\xF9i k\u1EBB \u0111\u1ECBch. \u0110\u1ED3ng \u0111\u1ED9i di chuy\u1EC3n qua Th\u1EA7n \u1EA5n s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c.",
      s2: "Th\u1EA7n m\xF4n: Rouie tri\u1EC7u h\u1ED3i ra c\xE1nh c\u1ED5ng th\u1EE9 nguy\xEAn. Sau 4 gi\xE2y c\xE1nh c\u1ED5ng s\u1EBD truy\u1EC1n t\u1ED1ng Rouie v\xE0 \u0111\u1ED3ng \u0111\u1ED9i trong th\u1EA7n m\xF4n v\u1EC1 t\u1EBF \u0111\xE0n \u0111\u1ED3ng th\u1EDDi gi\xFAp h\u1ECD \u0111\u01B0\u1EE3c h\u1ED3i to\xE0n b\u1ED9 m\xE1u v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y.",
      s3: "Th\u1EA7n tr\u1EADn: Rouie tri\u1EC7u h\u1ED3i Th\u1EA7n v\u1EF1c t\u1EA1i v\u1ECB tr\xED ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi \u0111\u1ED3ng th\u1EDDi t\u1EA5t c\u1EA3 \u0111\u1ED3ng \u0111\u1ED9i tr\xEAn b\u1EA3n \u0111\u1ED3 c\xF3 th\u1EC3 trong 8 gi\xE2y truy\u1EC1n t\u1ED1ng \u0111\u1EBFn v\u1ECB tr\xED Th\u1EA7n v\u1EF1c 1 l\u1EA7n. Ngo\xE0i ra t\u1EA5t c\u1EA3 \u0111\u1ED3ng \u0111\u1ED9i \u0111\u1EC1u \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh khi \u0111\u1EE9ng trong Th\u1EA7n v\u1EF1c."
    },
    meta_data: {
      win_rate: 46.32,
      pick_rate: 3.26,
      ban_rate: 1.13
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_512",
    name: "Rourke",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/512_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "T\xE1n X\u1EA1: N\u1ECF c\u1EE7a Rourke b\u1EAFn ra m\u0169i t\xEAn \u0111\u1EB7c bi\u1EC7t khi\u1EBFn n\u1EA1n nh\xE2n t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng ph\u1EA3i s\u1EBD b\u1ECB gi\u1EA3m gi\xE1p trong 6 gi\xE2y, c\u1ED9ng d\u1ED3n t\u1ED1i \u0111a 12 l\u1EA7n; g\xE2y c\xF4ng v\u1EADt l\xFD s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0(c\xF4ng tr\xECnh kh\xF4ng ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng th\xEAm t\u1EEB c\xE1c m\u0169i t\xEAn n\xE0y). Ch\u1EC9 hai\xA0m\u0169i t\xEAn n\u1EB1m gi\u1EEFa trong b\u1ED1n m\u0169i t\xEAn\xA0c\xF3 th\u1EC3 g\xE2y ch\xED m\u1EA1ng ho\u1EB7c k\xEDch ho\u1EA1t hi\u1EC7u \u1EE9ng \u0111i k\xE8m \u0111\xF2n \u0111\xE1nh.",
      s1: "\u0110o\u1EA1t m\u1EC7nh n\u1ECF: Rourke t\u0103ng 40% t\u1ED1c ch\u1EA1y trong 1.5 gi\xE2y, \u0111\u1ED3ng th\u1EDDi b\u1EAFn ra m\u0169i t\xEAn \u0111\u1EB7c bi\u1EC7t trong \u0111\xF2n \u0111\xE1nh k\u1EBF, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0m\u1ED7i m\u0169i. N\u1EA1n nh\xE2n tr\xFAng 4 m\u0169i t\xEAn n\xE0y s\u1EBD b\u1ECB gi\u1EA3m t\u1ED1c ch\u1EA1y.",
      s2: "Xung phong: Rourke anh d\u0169ng l\u01B0\u1EDBt t\u1EDBi tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0k\xE8m hi\u1EC7u \u1EE9ng \u0111\u1EA9y l\xF9i trong m\u1ED9t v\xF9ng nh\u1ECF, \u0111\u1ED3ng th\u1EDDi l\u1EADp t\u1EE9c th\u1EAFng l\u1EA1i. N\u1EBFu c\xF3 n\u1EA1n nh\xE2n t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD gi\xFAp Rourke gi\u1EA3m 2 gi\xE2y h\u1ED3i chi\xEAu n\xE0y.",
      s3: "C\xE0ng chi\u1EBFn c\xE0ng h\u0103ng: Rourke lo\u1EA1i b\u1ECF m\u1ECDi tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF hi\u1EC7n t\u1EA1i, \u0111\u1ED3ng th\u1EDDi t\u1EF1 t\u1EA1o l\xE1 ch\u1EAFn gi\xFAp ch\u1EB7n s\xE1t th\u01B0\u01A1ng. Ch\u1EEBng n\xE0o l\xE1 ch\u1EAFn c\xF2n t\u1ED3n t\u1EA1i, Rourke c\xF2n \u0111\u01B0\u1EE3c mi\u1EC5n nhi\u1EC5m c\xE1c tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF, v\xE0 khi\u1EBFn m\u1ECDi \u0111\xF2n \u0111\xE1nh ho\u1EB7c chi\xEAu th\u1EE9c chuy\u1EC3n h\xF3a 1 ph\u1EA7n s\xE1t th\u01B0\u01A1ng g\xE2y ra th\xE0nh gi\xE1 tr\u1ECB c\u1ED9ng th\xEAm cho l\xE1 ch\u1EAFn (20% hi\u1EC7u l\u1EF1c l\xEAn l\xEDnh v\xE0 qu\xE1i); t\u1ED1i \u0111a l\xEAn \u0111\u1EBFn 150% gi\xE1 tr\u1ECB l\xE1 ch\u1EAFn g\u1ED1c. \u0110\u1EB7c bi\u1EC7t ngay t\u1EA1i th\u1EDDi \u0111i\u1EC3m tung chi\xEAu Rourke c\xF2n \u0111\u01B0\u1EE3c t\u0103ng C\xF4ng v\u1EADt l\xFD\xA0v\xE0 Gi\xE1p; hi\u1EC7u \u1EE9ng k\xE9o d\xE0i 6 gi\xE2y."
    },
    meta_data: {
      win_rate: 54.72,
      pick_rate: 2.38,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_514",
    name: "Roxie",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/514_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Cu\u1ED1c l\u1EEDa: M\u1ED7i 50 m\xE1u t\u1ED1i \u0111a Roxie c\xF3, c\xF4 \u0111\u01B0\u1EE3c t\u0103ng th\xEAm 1 c\xF4ng ph\xE9p \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng th\u1EE9 ba l\xEAn k\u1EBB \u0111\u1ECBch s\u1EBD gi\xFAp Roxie h\u1ED3i 8% n\u0103ng l\u01B0\u1EE3ng t\u1ED1i \u0111a, v\xE0 \u0111\xE1nh d\u1EA5u Cu\u1ED1c l\u1EEDa l\xEAn n\u1EA1n nh\xE2n trong 5 gi\xE2y",
      s1: "Patin l\u1EEDa: Roxie t\u1EF1 ti\xEAu hao n\u0103ng l\u01B0\u1EE3ng trong 5 gi\xE2y \u0111\u1EC3 duy tr\xEC v\u1EC7t l\u1EEDa d\u01B0\u1EDBi \u0111\xF4i patin khi\u1EBFn m\u1ECDi n\u01A1i c\xF4 l\u01B0\u1EDBt qua \u0111\u1EC1u b\xF9ng ch\xE1y trong 2.5 gi\xE2y. T\xE0n l\u1EEDa g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0m\u1ED7i n\u1EEDa gi\xE2y l\xEAn c\xE1c \u0111\u01A1n v\u1ECB trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng, t\u1ED1i \u0111a c\u1ED9ng d\u1ED3n ba l\u1EA7n. N\u1EBFu n\u1EA1n nh\xE2n \u0111ang ch\u1ECBu d\u1EA5u \u1EA5n Cu\u1ED1c l\u1EEDa th\xEC Roxie s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i 1%\xA0m\xE1u t\u1ED5n th\u1EA5t\xA0(2% n\u1EBFu l\xE0 t\u01B0\u1EDBng). Hi\u1EC7u \u1EE9ng h\u1ED3i ph\u1EE5c kh\xF4ng c\u1ED9ng d\u1ED3n.",
      s2: "Balo l\u1EEDa: Roxie t\u0103ng 20% t\u1ED1c ch\u1EA1y v\xE0 t\u1EA1o l\xE1 ch\u1EAFn l\u1EEDa gi\xFAp ch\u1EB7n \u0111\u1EE9ng s\xE1t th\u01B0\u01A1ng trong 3 gi\xE2y. Su\u1ED1t th\u1EDDi gian n\xE0y k\u1EBB \u0111\u1ECBch va ph\u1EA3i Roxie s\u1EBD b\u1ECB l\xE0m ch\u1EADm trong th\u1EDDi gian ng\u1EAFn.",
      s3: "Keo l\u1EEDa: Agnie bay \u0111\u1EBFn l\xF4i m\u1EE5c ti\xEAu \u0111\u1EA7u ti\xEAn t\xF3m \u0111\u01B0\u1EE3c v\u1EC1 ph\xEDa b\u1EA3n th\xE2n trong 2.5 gi\xE2y, \u0111\u1ED3ng th\u1EDDi gi\xFAp Roxie l\xE0m m\u1EDBi l\u1EA1i th\u1EDDi gian h\u1ED3i Patin l\u1EEDa, kh\u1EAFc d\u1EA5u \u1EA5n Cu\u1ED1c l\u1EEDa l\xEAn n\u1EA1n nh\xE2n v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0sau khi chi\xEAu k\u1EBFt th\xFAc. Su\u1ED1t th\u1EDDi gian n\xE0y Roxie \u0111i \u0111\xE2u n\u1EA1n nh\xE2n s\u1EBD b\u1ECB k\xE9o theo \u0111\xF3, th\u1EADm ch\xED c\xF3 th\u1EC3 k\xE9o v\u01B0\u1EE3t \u0111\u1ECBa h\xECnh, nh\u01B0ng b\xF9 l\u1EA1i n\u1EA1n nh\xE2n mi\u1EC5n nhi\u1EC5m v\u1EDBi t\u1EA5t c\u1EA3 c\xE1c kh\u1ED1ng ch\u1EBF kh\xE1c. Kh\xF4ng c\xF3 t\xE1c d\u1EE5ng l\xEAn qu\xE1i kh\u1EE7ng. \xA0\u0110\u1ED3ng th\u1EDDi chi\xEAu cu\u1ED1i khi tr\xFAng T\u01B0\u1EDBng c\xF3 th\u1EC3 h\u1ED3i th\u1EDDi gian h\u1ED3i chi\xEAu c\u1EE7a chi\xEAu 1 v\xE0 2. Keo l\u1EEDa s\u1EBD kh\xF4ng th\u1EC3 b\u1ECB gi\u1EA3m th\u1EDDi gian t\u1ED3n t\u1EA1i nh\u1EDD Kh\xE1ng hi\u1EC7u \u1EE9ng"
    },
    meta_data: {
      win_rate: 51.98,
      pick_rate: 0.68,
      ban_rate: 0.02
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_163",
    name: "Ryoma",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/163_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ki\u1EBFm Quy\u1EBFt: N\u1ED9i t\u1EA1i:\xA0Sau m\u1ED7i 5 gi\xE2y, \u0111\xF2n \u0111\xE1nh k\u1EBF c\u1EE7a Ryoma s\u1EBD ph\xF3ng ra ki\u1EBFm kh\xED g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0\u0111\u1ED3ng th\u1EDDi gi\xE0m t\u1ED1c ch\u1EA1y c\u1EE7a nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu. N\u1EA1n nh\xE2n tr\xFAng r\xECa chi\xEAu s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng.",
      s1: "Th\u1EA7n H\xE0nh B\xE1ch Bi\u1EBFn: Ryoma nh\u1EA3y l\xF9i l\u1EA1i \u0111\u1EC3 tung m\u1ED9t \u0111\u01B0\u1EDDng ki\u1EBFm c\u1EF1c m\u1EA1nh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn. N\u1EBFu chi\xEAu th\u1EE9c s\xE1t th\u01B0\u01A1ng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD khi\u1EBFn th\u1EDDi gian h\u1ED3i chi\xEAu c\u1EE7a Th\u1EA7n h\xE0nh b\xE1ch bi\u1EBFn \u0111\u01B0\u1EE3c gi\u1EA3m \u0111i. Hi\u1EC7u \u1EE9ng kh\xF4ng c\u1ED9ng d\u1ED3n.",
      s2: "Nh\u1EA5t K\xEDch T\u1EA5t S\xE1t: Ryoma r\xFAt ki\u1EBFm ch\u1EDBp nho\xE1ng g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn k\u1EBB \u0111\u1ECBch \u0111\u1EA7u ti\xEAn tr\xFAng ph\u1EA3i, v\xE0 1 ph\u1EA7n s\xE1t th\u01B0\u01A1ng \u0111\xF3 l\xEAn c\xE1c m\u1EE5c ti\xEAu sau. C\xE1c n\u1EA1n nh\xE2n tr\xFAng r\xECa chi\xEAu s\u1EBD b\u1ECB cho\xE1ng.",
      s3: 'Lo\u1EA1n Tr\u1EA3m: "Ryoma \u0111\xE2m ki\u1EBFm li\xEAn t\u1EE5c 4 l\u1EA7n, m\u1ED7i \u0111\u1EE3t g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. M\u1ED7i c\xFA \u0111\xE2m tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp Ryoma h\u1ED3i m\xE1u. \u0110\xE2m nhi\u1EC1u t\u01B0\u1EDBng \u0111\u1ECBch kh\xF4ng khi\u1EBFn m\xE1u h\u1ED3i nhi\u1EC1u h\u01A1n\xA0(chi\xEAu th\u1EE9c g\xE2y n\u1EEDa hi\u1EC7u l\u1EF1c v\u1EDBi c\xE1c \u0111\u01A1n v\u1ECB kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng)."'
    },
    meta_data: {
      win_rate: 48.2,
      pick_rate: 9.05,
      ban_rate: 0.06
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_527",
    name: "Sephera",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/527_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Su\u1ED1i ngu\u1ED3n: N\u1ED9i t\u1EA1i: M\u1ED7i khi tung chi\xEAu Sephera s\u1EBD k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i Su\u1ED1i ngu\u1ED3n g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn t\u01B0\u1EDBng \u0111\u1ECBch l\xE2n c\u1EADn th\u1EA5p m\xE1u nh\u1EA5t, \u0111\u1ED3ng th\u1EDDi h\u1ED3i m\xE1u cho t\u01B0\u1EDBng \u0111\u1ED3ng minh l\xE2n c\u1EADn th\u1EA5p m\xE1u nh\u1EA5t.",
      s1: "Thu\u1EF7 \xE2m: Sephera g\u1EA3y \u0111\xE0n t\u1EA5n c\xF4ng 3 k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn (\u01B0u ti\xEAn t\u01B0\u1EDBng), g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n trong 1 gi\xE2y. \u0110\u1EB7c bi\u1EC7t \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp sau khi tung chi\xEAu n\xE0y s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 gi\xFAp gi\u1EA3m 1 gi\xE2y h\u1ED3i t\u1EA5t c\u1EA3 chi\xEAu.",
      s2: "Ao t\xF9: Sephera \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y trong tho\xE1ng ch\u1ED1c, r\u1ED3i 1.5 gi\xE2y sau d\u1EF1ng l\xEAn m\u1ED9t v\xF2ng tr\xF2n n\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p k\xE8m hi\u1EC7u \u1EE9ng cho\xE1ng, \xE1p d\u1EE5ng\xA0\u0111\u1ED1i v\u1EDBi nh\u1EEFng n\u1EA1n nh\xE2n \u0111\u1EE9ng \u1EDF r\xECa.",
      s3: "S\xF3ng ng\u1EA7m: Sephera h\xF2a m\xECnh v\xE0o d\xF2ng n\u01B0\u1EDBc khi\u1EBFn b\u1EA3n th\xE2n kh\xF4ng th\u1EC3 b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu trong 1.7 gi\xE2y, \u0111\u1ED3ng th\u1EDDi gi\xFAp h\u1ED3im\xE1u cho c\xE1c \u0111\u1ED3ng minh l\xE2n c\u1EADn, v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch c\u1EA1nh b\xEAn."
    },
    meta_data: {
      win_rate: 48.81,
      pick_rate: 1.31,
      ban_rate: 0.01
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_535",
    name: "Sinestrea",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/535_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Huy\u1EBFt hoa: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng m\u1EE5c ti\xEAu c\u1EE7a Sinestrea s\u1EBD t\u0103ng t\u1EA7m \u0111\xE1nh v\xE0 t\u1ED1c \u0111\xE1nh, sau 4 l\u1EA7n li\xEAn ti\u1EBFp c\xF4 s\u1EBD chuy\u1EC3n sang tr\u1EA1ng th\xE1i b\u1EAFn xa. M\u1ED7i khi \u0111\u1ED5i tr\u1EA1ng th\xE1i, c\xF4 s\u1EBD l\xE0m m\u1EDBi th\u1EDDi gian h\u1ED3i chi\xEAu 1 v\xE0 chi\xEAu 2.Sau khi v\xE0o tr\u1EADn, n\xFAt Bi\u1EBFn v\u1EC1 s\u1EBD \u0111\u01B0\u1EE3c thay th\u1EBF b\u1EB1ng Huy\u1EBFt t\u1EBF.Huy\u1EBFt t\u1EBF: Sinestrea hy sinh 50% m\xE1u hi\u1EC7n t\u1EA1i \u0111\u1EC3 g\xE2y s\xE1t th\u01B0\u01A1ng cho \u0111\u1ECBch trong ph\u1EA1m vi v\xE0 l\xE0m cho\xE1ng ch\xFAng 0.5 gi\xE2y \u0111\u1ED3ng th\u1EDDi khi\u1EBFn b\u1EA3n th\xE2n kh\xF4ng th\u1EC3 b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu. Ngo\xE0i ra m\u1ED7i t\u01B0\u1EDBng \u0111\u1ECBch b\u1ECB tr\xFAng chi\xEAu gi\xFAp c\xF4 h\u1ED3i 10% m\xE1u t\u1ED1i \u0111a (H\u1ED3i chi\xEAu 150 gi\xE2y).",
      s1: "Huy\u1EBFt \u0111\u1ED9t (Huy\u1EBFt ti\u1EC5n, khi \u0111\xE1nh xa): \u0110\xE1nh g\u1EA7n: Trong tr\u1EA1ng th\xE1i c\u1EADn chi\u1EBFn, Sinestrea l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 l\u1EADp t\u1EE9c ch\xECm v\xE0o gi\u1EA5c ng\u1EE7. \u0110\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp s\u1EBD bi\u1EBFn th\xE0nh \u0111\u1ED9t k\xEDch g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD cho m\u1EE5c ti\xEAu v\xE0 c\xE1c \u0111\u01A1n v\u1ECB xung quanh. Ngo\xE0i ra n\u1EBFu Sinestrea kh\xF4ng di chuy\u1EC3n trong 2.5 gi\xE2y c\xF4 c\u0169ng s\u1EBD ch\xECm v\xE0o gi\u1EA5c ng\u1EE7.\u0110\xE1nh xa: Sinestrea l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 b\u1EAFn m\u1ED9t huy\u1EBFt ti\u1EC5n. N\u1EBFu b\u1EAFn tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch \u0111\u1EA7u ti\xEAn, huy\u1EBFt ti\u1EC5n s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng t\u01B0\u01A1ng \u0111\u01B0\u01A1ng v\xE0 \u0111\u1EA9y l\xF9i. N\u1EBFu ph\xEDa sau h\u1EAFn c\xF3 t\u01B0\u1EDDng trong ph\u1EA1m vi 4m th\xEC t\u01B0\u1EDBng \u0111\u1ECBch n\xE0y s\u1EBD b\u1ECB tr\xF3i bu\u1ED9c (kh\xF4ng th\u1EC3 r\u1EDDi kh\u1ECFi ph\u1EA1m vi ch\u1EC9 \u0111\u1ECBnh).",
      s2: "Huy\u1EBFt s\xE1t (Huy\u1EBFt b\xE3o, khi \u0111\xE1nh xa): \u0110\xE1nh g\u1EA7n: Trong tr\u1EA1ng th\xE1i c\u1EADn chi\u1EBFn, Sinestrea vung ki\u1EBFm theo h\xECnh n\xF3n v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.\u0110\xE1nh xa: Trong tr\u1EA1ng th\xE1i \u0111\xE1nh xa, Sinestrea ng\u1EAFm chu\u1EA9n h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 kh\xF3a t\u1EA5t c\u1EA3 c\xE1c \u0111\u01A1n v\u1ECB \u0111\u1ECBch trong ph\u1EA1m vi trong m\u1ED9t kho\u1EA3ng th\u1EDDi gian. Sau khi k\u1EBFt th\xFAc vi\u1EC7c ng\u1EAFm chu\u1EA9n, c\xF4 b\u1EAFn ch\xF9m huy\u1EBFt ti\u1EC5n v\xE0o t\u1EA5t c\u1EA3 c\xE1c \u0111\u01A1n v\u1ECB \u0111\xF3 v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD g\u1EA5p \u0111\xF4i.",
      s3: "Huy\u1EBFt \u1EA3nh: Sinestrea ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i \u0111\xE1nh xa v\xE0 m\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng trong th\u1EDDi gian n\xE0y s\u1EBD b\u1EAFn ra 3 huy\u1EBFt ti\u1EC5n \u0111\u1ED3ng th\u1EDDi b\u1EA3n th\xE2n nh\u1EADn 10 - 20% hi\u1EC7u \u1EE9ng h\xFAt m\xE1u v\u1EADt l\xFD k\xE8m t\u0103ng 30% t\u1ED1c ch\u1EA1y v\xE0 mi\u1EC5n l\xE0m ch\u1EADm."
    },
    meta_data: {
      win_rate: 52.3,
      pick_rate: 9.14,
      ban_rate: 1.46
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_134",
    name: "Skud",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/134_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "S\xF4i m\xE1u: N\u1ED9i t\u1EA1i:\xA0Skud \u0111\u01B0\u1EE3c t\u0103ng m\xE1u t\u1ED1i \u0111a. Khi t\u1EA5n c\xF4ng m\u1EE5c ti\xEAu c\xF3 \xEDt m\xE1u t\u1ED1i \u0111a h\u01A1n m\xECnh, m\u1ED7i \u0111\xF2n \u0111\xE1nh c\u1EE7a Skud s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p (s\xE1t th\u01B0\u01A1ng g\xE2y th\xEAm s\u1EBD kh\xF4ng ch\xED m\u1EA1ng).",
      s1: 'G\u0103ng n\u1ED5i lo\u1EA1n: "Skud nh\u1EA3y x\u1ED5 \u0111\u1EBFn ph\xEDa tr\u01B0\u1EDBc tung m\u1ED9t c\xFA \u0111\u1EA5m, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.Chi\xEAu tr\xFAng k\u1EBB \u0111\u1ECBch gi\xFAp Skud\xA0nh\u1EADn t\u1ED1c \u0111\xE1nh v\xE0 \u0111\xF2n \u0111\xE1nh c\u01B0\u1EDDng h\xF3a c\u1EE7a chi\xEAu 2 s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p."',
      s2: 'G\u0103ng cu\u1ED3ng b\u1EA1o: "Skud d\u1ED3n s\u1EE9c m\u1EA1nh v\xE0o g\u0103ng tay khi\u1EBFn b\u1EA3n th\xE2n \u0111\u01B0\u1EE3c t\u0103ng d\u1EA7n t\u1ED1c ch\u1EA1y \u0111\u1EBFn 40% sau 3 gi\xE2y r\u1ED3i gi\u1EA3m d\u1EA7n. \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a, trong th\u1EDDi gian hi\u1EC7u l\u1EF1c s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y m\u1EE5c ti\xEAu.\u0110\xF2n c\u01B0\u1EDDng h\xF3a n\u1EBFu tr\xFAng \u0111\u1ECBch s\u1EBD gi\xFAp chi\xEAu n\xE0y \u0111\u01B0\u1EE3c gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu."',
      s3: 'G\u0103ng hung th\u1EA7n: "N\u1ED9i t\u1EA1i: H\u1EA1 l\xEDnh v\xE0 qu\xE1i r\u1EEBng s\u1EBD gi\xFAp b\u1EA3n th\xE2n h\u1ED3i m\xE1u d\u1EF1a theo m\xE1u \u0111\xE3 m\u1EA5t.Skud t\u1EE5 l\u1EF1c trong tho\xE1ng ch\u1ED1c r\u1ED3i hu\u01A1 g\u0103ng h\u1EA5t tung t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 \u0111\u1EA9y l\xF9i k\u1EBB tr\xFAng ph\u1EA3i."'
    },
    meta_data: {
      win_rate: 48.14,
      pick_rate: 4.55,
      ban_rate: 0.03
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_169",
    name: "Slimz",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/169_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Xuy\xEAn th\u1EA5u: Sau m\u1ED7i 2 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng, \u0111\xF2n ti\u1EBFp theo c\u1EE7a Slimz s\u1EBD xuy\xEAn th\u1EE7ng m\u1EE5c ti\xEAu v\xE0 s\xE1t th\u01B0\u01A1ng l\xEAn c\u1EA3 c\xE1c n\u1EA1n nh\xE2n ph\xEDa sau, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s1: 'Lao c\u01A1 kh\xED: "Slimz ph\xF3ng m\u1ED9t m\u0169i lao bay c\u1EF1c xa, n\u1EA1n nh\xE2n \u0111\u1EA7u ti\xEAu tr\xFAng chi\xEAu s\u1EBD b\u1ECB l\xE0m cho\xE1ng\xA0v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, hi\u1EC7u l\u1EF1c t\u1EF7 l\u1EC7 thu\u1EADn v\u1EDBi kho\u1EA3ng c\xE1ch m\u0169i lao \u0111\xE3 bay bao xa, c\xF3 gi\u1EDBi h\u1EA1n th\u1EDDi gian cho\xE1ng t\u1ED1i \u0111a v\xE0 g\xE2y t\u1ED1i \u0111a g\u1EA5p \u0111\xF4i s\xE1t th\u01B0\u01A1ng.M\u0169i lao tr\xFAng \u0111\u1ECBch gi\xFAp Slimz \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 n\u1EBFu tr\xFAng t\u01B0\u1EDBng th\xEC c\u1ED9ng th\xEAm t\u1ED1c ch\u1EA1y trong th\u1EDDi gian ti\u1EBFp theo, ho\u1EB7c n\u1EBFu l\xE0 l\xEDnh hay qu\xE1i r\u1EEBng s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n."',
      s2: "L\xF2 xo c\u01A1 kh\xED: Slimz s\u1EED d\u1EE5ng l\xF2 xo trong ba lo nh\u1EA3y b\u1EADt \u0111\u1EBFn \u0111i\u1EC3m \u0111\xE3 ch\u1ECDn. Sau khi \u0111\xE1p xu\u1ED1ng \u0111\u1EA5t, h\u1EAFn \u0111\u01B0\u1EE3c t\u0103ng c\xF4ng v\u1EADt l\xFD trong th\u1EDDi gian ti\u1EBFp theo.",
      s3: "Thu\u1ED1c c\xE0 r\u1ED1t: K\xEDch ho\u1EA1t: \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng g\xE2y th\xEAm m\xE1u t\u1ED1i \u0111a c\u1EE7a m\u1EE5c ti\xEAu th\xE0nh s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. \u0110\u1ED3ng th\u1EDDi, Slimz \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y trong 1 th\u1EDDi gian (hi\u1EC7u \u1EE9ng t\u0103ng th\xEAm th\u1EDDi gian v\u1EDBi m\u1ED7i \u0111i\u1EC3m h\u1EA1 ho\u1EB7c ph\u1EE5 h\u1EA1)."
    },
    meta_data: {
      win_rate: 49.29,
      pick_rate: 7.02,
      ban_rate: 0.02
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_174",
    name: "Stuart",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/174_120_1.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Th\u1EC3 n\u0103ng c\u01B0\u1EDDng h\xF3a: N\u1ED9i t\u1EA1i: \u0110\xE1nh th\u01B0\u1EDDng v\xE0 d\xF9ng chi\xEAu 1, chi\xEAu 3 s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c n\u0103ng l\u01B0\u1EE3ng, t\u1ED1i \u0111a 4 c\u1ED9ng d\u1ED3n. Khi \u0111\u1EA1t t\u1ED1i \u0111a, h\u1EAFn \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a.",
      s1: "Phi \u0111\u1EA1n t\u1EED vong: B\u1EAFn phi \u0111\u1EA1n tr\xEAn \u0111\u01B0\u1EDDng th\u1EB3ng v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn m\u1ECDi m\u1EE5c ti\xEAu tr\xEAn \u0111\u01B0\u1EDDng bay",
      s2: "Huy\u1EBFt \u1EA3nh ma nh\xE3n: Mi\u1EC5n th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 t\u0103ng t\u1ED1c ch\u1EA1y",
      s3: "H\u1EE7y di\u1EC7t b\u1ED9c ph\xE1: Stuart l\u01B0\u1EDBt \u0111\u1EBFn m\u1EE5c ti\xEAu, l\xE0m ch\u1EADm v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng h\u1EAFn."
    },
    meta_data: {
      win_rate: 48.86,
      pick_rate: 11.57,
      ban_rate: 0.48
    },
    counters: [
      "Capheny",
      "Tel'Annas",
      "Yorn"
    ]
  },
  {
    id: "hero_140",
    name: "Superman",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/140_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Si\xEAu Ph\xE0m: "N\u1ED9i t\u1EA1i:\xA0Superman c\xF3 hai c\u01A1 ch\u1EBF di chuy\u1EC3n: Phi h\xE0nh v\xE0 B\u1ED9 h\xE0nh.Anh t\xEDch t\u1EE5 si\xEAu n\u0103ng v\xE0 \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y theo m\u1ED7i 1m di chuy\u1EC3n, r\u1ED3i chuy\u1EC3n sang phi h\xE0nh khi t\xEDch \u0111\u1EE7 si\xEAu n\u0103ng. Superman \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y khi bay v\u1EC1 ph\xEDa k\u1EBB \u0111\u1ECBch.Ngo\xE0i ra \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng \u0111\u1EA7u ti\xEAn trong tr\u1EA1ng th\xE1i n\xE0y s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD d\u1EF1a tr\xEAn m\xE1u t\u1ED1i \u0111a b\u1EA3n th\xE2n. Tr\u1EA1ng th\xE1i phi h\xE0nh s\u1EBD bi\u1EBFn m\u1EA5t khi Superman c\xF3\xA0t\u1ED1c ch\u1EA1y\xA0d\u01B0\u1EDBi 375."',
      s1: "Si\xEAu N\u0103ng L\u1EF1c: Superman th\u1ED5i h\u01A1i c\u1EF1c l\u1EA1nh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng. N\u1EBFu tung chi\xEAu trong tr\u1EA1ng th\xE1i phi h\xE0nh, anh l\u01B0\u1EDBt \u0111\u1EBFn g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi b\u1EAFn tia laze c\u0169ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s2: "Ng\u01B0\u1EDDi \u0111\xE0n \xF4ng th\xE9p: L\u1EADp t\u1EE9c lo\u1EA1i b\u1ECF m\u1ECDi tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF, \u0111\u1ED3ng th\u1EDDi gi\xFAp t\u0103ng t\u1ED1c ch\u1EA1y. N\u1EBFu tung chi\xEAu trong tr\u1EA1ng th\xE1i phi h\xE0nh, b\xEAn c\u1EA1nh nh\u1EEFng l\u1EE3i \xEDch tr\xEAn, Superman s\u1EBD l\u01B0\u1EDBt \u0111\u1EBFn n\u1EC7n tay xu\u1ED1ng \u0111\u1EA5t g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.",
      s3: "Superman: Superman h\u1EA5p thu n\u0103ng l\u01B0\u1EE3ng m\u1EB7t tr\u1EDDi , gi\xFAp t\u0103ng t\u1ED1c \u0111\u1ED9 n\u1EA1p si\xEAu n\u0103ng trong th\u1EDDi gian ti\u1EBFp theo. N\u1EBFu tung chi\xEAu trong tr\u1EA1ng th\xE1i phi h\xE0nh, anh bay \u0111\u1EBFn \u0111\u1EA9y l\xF9i n\u1EA1n nh\xE2n, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 t\u0103ng 100% t\u1ED1c \u0111\u1ED9 n\u1EA1p si\xEAu n\u0103ng."
    },
    meta_data: {
      win_rate: 44.29,
      pick_rate: 0.4,
      ban_rate: 0.06
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_144",
    name: "Taara",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/144_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Chi\u1EBFn \xFD: "N\u1ED9i t\u1EA1i: M\u1ED7i 1% m\xE1u t\u1ED1i \u0111a b\u1ECB m\u1EA5t \u0111\u01B0\u1EE3c th\xEAm c\xF4ng v\u1EADt l\xFD.Khi s\u1EED d\u1EE5ng\xA0chi\xEAu th\u1EE9c/chi\xEAu cu\u1ED1i\xA0s\u1EBD ti\xEAu hao 4%/8% m\xE1u hi\u1EC7n t\u1EA1i v\xE0 h\u1ED3i l\u1EA1i 6% m\xE1u \u0111\xE3 m\u1EA5t trong 3 gi\xE2y."',
      s1: "Tr\u0103n tr\u1ED1i: Taara nh\u1EA3y l\xEAn v\xE0 s\u1EED d\u1EE5ng c\xE2y b\xFAa n\u1EB7ng n\u1EC1 c\u1EE7a c\xF4 \u0111\u1EADp l\xFAn m\u1EB7t \u0111\u1EA5t, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n tr\xFAng chi\xEAu.",
      s2: "\u0110\u1EADp tan: Taara vung b\xFAa xoay tr\xF2n g\xE2y hai l\u01B0\u1EE3t s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn.",
      s3: "Th\xE2n th\u1EC3 th\xE9p: Taara s\u1EED d\u1EE5ng h\u1EBFt ti\u1EC1m n\u0103ng c\u1EE7a m\xECnh gi\xFAp ph\u1EE5c h\u1ED3i\xA08%\xA0m\xE1u t\u1ED1i \u0111a m\u1ED7i gi\xE2y trong 1 th\u1EDDi gian, \u0111\u1ED3ng th\u1EDDi t\u0103ng t\u1ED1c ch\u1EA1y b\u1EA3n th\xE2n."
    },
    meta_data: {
      win_rate: 54.02,
      pick_rate: 25.72,
      ban_rate: 19.63
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_542",
    name: "Tachi",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/542_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Phong \u1EA4n C\u1EE7a R\u1ED3ng: N\u1ED9i t\u1EA1i: Tachi giao tranh v\u1EDBi k\u1EBB \u0111\u1ECBch (t\u01B0\u1EDBng ho\u1EB7c qu\xE1i to) v\xE0 t\u1EA1o s\xE1t th\u01B0\u01A1ng th\xEC \u0111\u1ED3ng th\u1EDDi c\u0169ng t\u1ECFa ra long kh\xED l\xEAn m\u1EE5c ti\xEAu g\u1EA7n b\u1EA3n th\xE2n nh\u1EA5t - g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. L\xFAc n\xE0y Tachi \u0111\u01B0\u1EE3c h\u1ED3i\xA0m\xE1u \u0111\xE3 m\u1EA5t v\xE0 t\u0103ng t\u1ED1c. Khi 4 d\u1EA5u \u1EA5n \u0111\u1EC1u nh\u1EADn \u0111\u01B0\u1EE3c n\u0103ng l\u01B0\u1EE3ng, phong \u1EA5n s\u1EBD khai m\u1EDF gi\xFAp Tachi t\u0103ng\xA0t\u1ED1c \u0111\xE1nh v\xE0 l\xE1 ch\u1EAFn t\u01B0\u01A1ng \u0111\u01B0\u01A1ng m\xE1u t\u1ED1i \u0111a. Khi m\u1EDF phong \u1EA5n, t\u1EA5t c\u1EA3 s\xE1t th\u01B0\u01A1ng c\u1EE7a Tachi \u0111\u1EC1u l\xE0 s\xE1t th\u01B0\u01A1ng chu\u1EA9n.",
      s1: "Long ph\xE1: Long Ph\xE1 (ch\u01B0a m\u1EDF phong \u1EA5n) Tachi ch\xE9m ra \u0111ao kh\xED g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 l\xE0m ch\u1EADm.Long S\xE1t (m\u1EDF phong \u1EA5n) Tachi t\u1EE5 l\u1EF1c 1 gi\xE2y r\u1ED3i ch\xE9m ra \u0111ao kh\xED (t\u1EE5 l\u1EF1c \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng) g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n. D\u01B0\u1EDBi tr\u1EA1ng th\xE1i n\xE0y 3 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng \u0111\u1EA7u ti\xEAn tr\xFAng \u0111\xEDch s\u1EBD khi\u1EBFn s\xE1t th\u01B0\u01A1ng c\u1EE7a \u0111ao kh\xED t\u0103ng th\xEAm.",
      s2: "Long B\u1ED9: HTachi l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi khi k\u1EBFt th\xFAc s\u1EBD xoay tr\xF2n ch\xE9m g\xE2y l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng nh\u01B0 tr\xEAn l\xEAn c\xE1c m\u1EE5c ti\xEAu trong ph\u1EA1m vi.D\u01B0\u1EDBi tr\u1EA1ng th\xE1i m\u1EDF phong \u1EA5n, 3 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng \u0111\u1EA7u ti\xEAn tr\xFAng \u0111\xEDch s\u1EBD khi\u1EBFn chi\xEAu n\xE0y gi\u1EA3m h\u1ED3i chi\xEAu. Chi\xEAu 1 trong khi t\u1EE5 l\u1EF1c c\xF3 th\u1EC3 d\xF9ng chi\xEAu n\xE0y \u0111\u1EC3 \u0111\u1ED5i v\u1ECB tr\xED nh\u01B0ng b\xF9 l\u1EA1i s\u1EBD m\u1EA5t \u0111i s\xE1t th\u01B0\u01A1ng.",
      s3: "Long To\xE1i: Tachi nhanh ch\xF3ng bi\u1EBFn tr\xEAn \u0111\u1EA7u \u0111\u1EBFn v\u1ECB tr\xED m\u1EE5c ti\xEAu v\xE0 tung ra 2 \u0111\xF2n th\u1EADp t\u1EF1 tr\u1EA3m. M\u1ED7i lu\u1ED3ng \u0111ao kh\xED g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm m\u1EE5c ti\xEAu. L\u1EA7n vung \u0111ao th\u1EE9 3 s\u1EBD khi\u1EBFn t\u1EA5t c\u1EA3 m\u1EE5c ti\xEAu trong ph\u1EA1m vi ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.Khi \u0111\xE1p \u0111\u1EA5t Tachi l\u1EADp t\u1EE9c \u0111\u01B0\u1EE3c m\u1EDF phong \u1EA5n."
    },
    meta_data: {
      win_rate: 51.62,
      pick_rate: 3.89,
      ban_rate: 0.02
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_186",
    name: "Teemee",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/186_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "V\xE0ng vung v\xE3i: N\u1ED9i t\u1EA1i: C\xE1c \u0111\u01A1n v\u1ECB k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn (kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng) khi b\u1ECB h\u1EA1 g\u1EE5c gi\xFAp TeeMee v\xE0 \u0111\u1ED3ng \u0111\u1ED9i xung quanh nh\u1EADn th\xEAm 25% v\xE0ng.",
      s1: "R\u1EAFm th\u1EA7n l\u1EF1c: TeeMee b\u1ED7ng nhi\xEAn \u0111au b\u1EE5ng d\u1EEF d\u1ED9i, li\xEAn t\u1EE5c to\xE1t m\u1ED3 h\xF4i trong 5 gi\xE2y. Su\u1ED1t th\u1EDDi gian n\xE0y, TeeMee c\xF3 th\u1EC3 t\u1EF1 ch\u1EE7 \u0111\u1ED9ng ho\u1EB7c ch\u1EDD\xA0h\u1EBFt th\u1EDDi gian ch\u1ECBu \u0111\u1EF1ng d\u1EABn \u0111\u1EBFn \u0111\xE1nh r\u1EAFm khi\u1EBFn k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 b\u1ECB cho\xE1ng. Th\u1EDDi gian n\xEDn c\xE0ng l\xE2u, s\xE1t th\u01B0\u01A1ng v\xE0 cho\xE1ng c\xE0ng cao.",
      s2: "Gi\xE1o M\xF3c TeeMee: TeeMee ph\xF3ng gi\xE1o m\xF3c theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh v\xE0 k\xE9o b\u1EA3n th\xE2n l\u1EA1i g\u1EA7n m\u1EE5c ti\xEAu. N\u1EBFu \u0111\u1EA5y l\xE0 k\u1EBB \u0111\u1ECBch, n\u1EA1n nh\xE2n s\u1EBD ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 b\u1ECB cho\xE1ng 1 gi\xE2y.",
      s3: "Ph\xE1p tr\u1EADn th\u1EA7n k\u1EF3: TeeMee t\u1EA1o ra m\u1ED9t v\xF9ng ma tr\u1EADn ph\u1EE5c sinh bao ph\u1EE7 b\u1EA3n th\xE2n v\xE0 \u0111\u1ED3ng minh th\u1EA5p m\xE1u nh\u1EA5t (v\u1EABn c\xF3 th\u1EC3 tung chi\xEAu khi b\u1ECB kh\u1ED1ng ch\u1EBF) sau 3 gi\xE2y. Su\u1ED1t th\u1EDDi gian hi\u1EC7u l\u1EF1c, khi b\u1EA3n th\xE2n ho\u1EB7c t\u01B0\u1EDBng muc ti\xEAu \u0111\u1ED3ng minh b\u1ECB h\u1EA1 g\u1EE5c s\u1EBD \u0111\u01B0\u01A1c h\u1ED3i sinh sau 2 gi\xE2y v\u1EDBi 1 l\u01B0\u1EE3ng m\xE1u. \u0110\u01A1n v\u1ECB khi s\u1ED1ng l\u1EA1i s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y trong 2 gi\xE2y l\xEAn c\xE1c k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn"
    },
    meta_data: {
      win_rate: 48.5,
      pick_rate: 1.01,
      ban_rate: 0.09
    },
    counters: [
      "Krizzix",
      "Ming",
      "Dolia"
    ]
  },
  {
    id: "hero_546",
    name: "Teeri",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/546_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Th\u1EA7n kh\xED song lu\xE2n: \u0110\xE1nh th\u01B0\u1EDDng v\xE0 tung chi\xEAu tr\xFAng m\u1EE5c ti\xEAu \u0111\u1ECBch khi\u1EBFn Teeri t\u0103ng n\u0103ng l\u01B0\u1EE3ng. \u0110\u1EA1t 100 n\u0103ng l\u01B0\u1EE3ng, Teeri s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\xE0 kh\xF4ng ti\xEAu hao s\u1ED1 l\u1EA7n \u0111\xE1nh th\u01B0\u1EDDng, k\xE9o d\xE0i 3 gi\xE2y.",
      s1: "Quang minh lu\xE2n: Teeri b\u1EAFn m\u1EE5c ti\xEAu trong ph\u1EA1m vi ch\u1EC9 \u0111\u1ECBnh. M\u1ED7i vi\xEAn \u0111\u1EA1n g\xE2y s\xE1t th\u01B0\u01A1ng v\xE0 g\u0103m d\u1EA5u \u1EA5n l\xEAn m\u1EE5c ti\xEAu v\xE0 khi\u1EBFn ch\xFAng b\u1ECB l\xE0m ch\u1EADm.",
      s2: "Xuy\xEAn t\xE2m lu\xE2n: T\u0103ng t\u1ED1c v\xE0 nh\u1EADn s\u1ED1 l\u1EA7n \u0111\xE1nh th\u01B0\u1EDDng c\u01B0\u1EDDng h\xF3a xuy\xEAn th\u1EA5u qua nhi\u1EC1u m\u1EE5c ti\xEAu. N\u1EBFu tr\xFAng 2 m\u1EE5c ti\xEAu th\xEC d\u1EA5u \u1EA5n l\xE0m ch\u1EADm s\u1EBD chuy\u1EC3n cho m\u1EE5c ti\xEAu sau.",
      s3: "Li\xEAn ho\xE0n lu\xE2n: Tung Th\u1EA7n Kh\xED Song LU\xE2n theo qu\u1EF9 \u0111\u1EA1o ch\u1EC9 \u0111\u1ECBnh. M\u1ED7i l\u1EA7n tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch, th\u1EA7n kh\xED s\u1EBD bay th\xEAm r\u1ED3i quay v\u1EC1 g\xE2y s\xE1t th\u01B0\u01A1ng cho c\xE1c m\u1EE5c ti\xEAu tr\xEAn \u0111\u01B0\u1EDDng bay v\xE0 khi\u1EBFn ch\xFAng l\u1ED9 di\u1EC7n."
    },
    meta_data: {
      win_rate: 52,
      pick_rate: 4.84,
      ban_rate: 0.02
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_501",
    name: "Tel'Annas",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/501_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Sao tr\u1EDDi: N\u1ED9i t\u1EA1i:\xA0T\u0103ng 8%\xA0c\xF4ng v\u1EADt l\xFD\xA0khi c\xF3 t\u01B0\u1EDBng \u0111\u1ED3ng minh xung quanh.",
      s1: "\u01AFng nh\xE3n: T\u0103ng m\u1EA1nh t\u1EA7m \u0111\xE1nh v\xE0 t\u1ED1c \u0111\xE1nh. C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a b\u1EDFi s\u1EE9c m\u1EA1nh b\xF3ng t\u1ED1i, g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD",
      s2: "\xC1m ti\u1EC5n: Tel\u2019Annas b\u1EAFn m\u1ED9t l\xFAc 3 m\u0169i t\xEAn g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu, l\xE0m gi\u1EA3m t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng. M\u1ED7i khi m\u0169i t\xEAn tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch, Tel'Annas \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y trong 1 th\u1EDDi gian.",
      s3: "H\u1ED7n mang ti\u1EC5n: Sau tho\xE1ng ch\u1ED1c ni\u1EC7m ch\xFA, Tel\u2019Annas b\u1EAFn ra m\u1ED9t m\u0169i t\xEAn h\u1ED7n mang, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 l\xE0m cho\xE1ng t\u01B0\u1EDBng \u0111\u1ECBch."
    },
    meta_data: {
      win_rate: 48.7,
      pick_rate: 14.69,
      ban_rate: 0.06
    },
    counters: [
      "Capheny",
      "Stuart",
      "Yorn"
    ]
  },
  {
    id: "hero_135",
    name: "Thane",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/135_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Quy\u1EC1n n\u0103ng ma thu\u1EADt: "N\u1ED9i t\u1EA1i: Khi m\xE1u c\u1EE7a Thane d\u01B0\u1EDBi ng\u01B0\u1EE1ng nh\u1EA5t \u0111\u1ECBnh, h\u1EAFn c\xF3 th\u1EC3 h\u1ED3i l\u1EA1i m\u1ED9t s\u1ED1 l\u01B0\u1EE3ng d\u1EF1a theo m\xE1u t\u1ED1i \u0111a c\u1EE7am\xECnh\xA0v\xE0 nh\u1EADn mi\u1EC5n th\u01B0\u01A1ng trong th\u1EDDi gian ng\u1EAFn."',
      s1: "Xung phong: Thane lao \u0111\u1EBFn g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD theo t\u1EEBng \u0111\u1EE3t (c\xE0ng g\u1EA7n c\xE0ng nhi\u1EC1u s\xE1t th\u01B0\u01A1ng) l\xEAn k\u1EBB \u0111\u1ECBch k\xE8m hi\u1EC7u \u1EE9ng \u0111\u1EA9y l\xF9i li\xEAn t\u1EE5c. Khi chi\xEAu k\u1EBFt th\xFAc s\u1EBD h\u1EA5t v\u0103ng n\u1EA1n nh\xE2n.",
      s2: "G\u01B0\u01A1m th\u1EA7n: Thane ph\xF3ng l\xEAn tr\u1EDDi c\u1EAFm ki\u1EBFm th\u1EA7n xu\u1ED1ng \u0111\u1EA5t, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB th\xF9 trong ph\u1EA1m vi, h\u1EA5t v\u0103ng v\xE0 l\xE0m ch\u1EADm\xA0t\u1ED1c ch\u1EA1y c\u1EE7a c\xE1c n\u1EA1n nh\xE2n.",
      s3: "Excalibur: Thane r\xFAt ki\u1EBFm th\u1EA7n ch\xE9m v\u1EC1 ph\xEDa tr\u01B0\u1EDBc, g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n, k\xE8m 15% m\xE1u \u0111\xE3 m\u1EA5t c\u1EE7a m\u1EE5c ti\xEAu th\xE0nh s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Thane nh\u1EADn 20% mi\u1EC5n th\u01B0\u01A1ng v\xE0 kh\xF4ng th\u1EC3 b\u1ECB ng\u0103n c\u1EA3n khi \u0111ang tung chi\xEAu."
    },
    meta_data: {
      win_rate: 48.95,
      pick_rate: 4.55,
      ban_rate: 0.05
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_507",
    name: "The Flash",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/507_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Th\u1EA7n t\u1ED1c l\u1EF1c: The Flash nh\u1EADn 1 \u0111i\u1EC3m t\u1ED1c l\u1EF1c sau m\u1ED7i 4 m\xE9t di chuy\u1EC3n; khi t\xEDch \u0111\u1EE7 10 \u0111i\u1EC3m s\u1EBD khi\u1EBFn b\u1EA3n th\xE2n c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh k\u1EBF gi\xFAp l\u01B0\u1EDBt \u0111\u1EBFn m\u1EE5c ti\xEAu, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n. \u0110\xF2n \u0111\xE1nh tr\xFAng \u0111\xEDch gi\xFAp The Flash nh\u1EADn l\xE1 ch\u1EAFn h\u1EA5p thu s\xE1t th\u01B0\u01A1ng.",
      s1: "H\xE0nh tr\xECnh si\xEAu t\u1ED1c: The Flash l\u01B0\u1EDBt \u0111i c\u1EF1c nhanh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu d\u1ECDc \u0111\u01B0\u1EDDng. Khi \u0111\u1EBFn \u0111\xEDch, The Flash c\xF3 th\u1EC3 k\xEDch ho\u1EA1t chi\xEAu l\u1EA7n n\u1EEFa \u0111\u1EC3 l\u01B0\u1EDBt v\u1EC1 \u0111i\u1EC3m kh\u1EDFi \u0111\u1EA7u, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu d\u1ECDc \u0111\u01B0\u1EDDng. C\xE1c n\u1EA1n nh\xE2n tr\xFAng c\u1EA3 hai l\u1EA7n s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s2: "C\xFA \u0111\u1EA5m ch\u1EDBp nho\xE1ng: The Flash tung chu\u1ED7i li\xEAn ho\xE0n \u0111\u1EA5m c\xF4ng k\xEDch k\u1EBB \u0111\u1ECBch 5 l\u1EA7n trong 0.8 gi\xE2y, m\u1ED7i \u0111\u1EE3t \u0111\u1EC1u g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. \u0110\u1EB7c bi\u1EC7t, c\xFA \u0111\u1EA5m cu\u1ED1i c\xF3 th\u1EC3 g\xE2y g\u1EA5p \u0111\xF4i s\xE1t th\u01B0\u01A1ng, \u0111\u1ED3ng th\u1EDDi gi\xFAp b\u1EA3n th\xE2n t\u0103ng t\u1ED1c ch\u1EA1y n\u1EBFu \u0111\xE1nh tr\xFAng \u0111\u1ECBch.",
      s3: "L\u1ED1c ch\xE2n kh\xF4ng: The Flash ch\u1EA1y v\xF2ng quanh t\u1EA1o n\xEAn m\u1ED9t c\u01A1n l\u1ED1c ch\xE2n kh\xF4ng gi\xFAp b\u1EA3n th\xE2n kh\xF4ng b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi \u1EA3nh h\u01B0\u1EDFng, b\xF9 l\u1EA1i t\u1EF1 gi\u1EA3m t\u1ED1c ch\u1EA1y c\u1EE7a b\u1EA3n th\xE2n trong 2 gi\xE2y.  Sau 2 gi\xE2y The Flash d\u1EEBng l\u1EA1i \u0111\u1ED9t ng\u1ED9t khi\u1EBFn k\u1EBB \u0111\u1ECBch b\u1ECB h\xFAt v\u1EC1 t\xE2m b\xE3o, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0v\xE0 g\xE2y th\xEAm 1 gi\xE2y gi\u1EA3m t\u1ED1c."
    },
    meta_data: {
      win_rate: 47.59,
      pick_rate: 0.85,
      ban_rate: 0.03
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_532",
    name: "Thorne",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/532_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110i\u1EC1u Lu\u1EADt Ma S\xFAng: Chi\xEAu c\u1EE7a Thorne kh\xF4ng b\u1ECB \u1EA3nh h\u01B0\u1EDFng b\u1EDFi gi\u1EA3m h\u1ED3i chi\xEAu m\xE0 m\u1ED7i 1% gi\u1EA3m h\u1ED3i chi\xEAu s\u1EBD chuy\u1EC3n th\xE0nh 4 c\xF4ng v\u1EADt l\xFD.",
      s1: "\u0110\u1EA1n ma n\u0103ng: Thorne ch\u1ECDn 1 trong 3 lo\u1EA1i ma \u0111\u1EA1n n\u1EA1p v\xE0o s\xFAng \u0111\u1EC3 c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng th\xE0nh k\u1EBF.  \u0110\u1EA1n t\xEDm: G\xE2y th\xEAm m\xE1u hi\u1EC7n t\u1EA1i c\u1EE7a m\u1EE5c ti\xEAu th\xE0nh s\xE1t th\u01B0\u01A1ng ph\xE9p  \u0110\u1EA1n v\xE0ng: Khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB l\xE0m ch\u1EADm  \u0110\u1EA1n xanh: G\xE2y s\xE1t th\u01B0\u01A1ng n\u1ED5 trong ph\u1EA1m vi",
      s2: "Ma s\xFAng nh\u1EADp h\u1ED3n: Thorne l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc v\xE0 c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng trong 3 gi\xE2y k\u1EBF th\xE0nh ma \u0111\u1EA1n c\xF4ng k\xEDch.  \u0110\u1EA1n t\xEDm: b\u1EAFn tr\xFAng m\u1EE5c ti\xEAu g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n d\u1EF1a tr\xEAn l\u01B0\u1EE3ng m\xE1u m\u1EE5c ti\xEAu \u0111\xE3 m\u1EA5t  \u0110\u1EA1n v\xE0ng: b\u1EAFn tr\xFAng m\u1EE5c ti\xEAu g\xE2y cho\xE1ng  \u0110\u1EA1n xanh: b\u1EAFn tr\xFAng m\u1EE5c ti\xEAu g\xE2y n\u1ED5",
      s3: "Ma s\xFAng ph\xE1n quy\u1EBFt: horne t\u1EE5 l\u1EF1c 1 gi\xE2y r\u1ED3i g\xE2y 300 (+1.25 c\xF4ng v\u1EADt l\xFD) s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn c\xE1c m\u1EE5c ti\xEAu trong ph\u1EA1m vi. K\u1EBB \u0111\u1ECBch \u0111\u1EE9ng trong trung t\xE2m khu v\u1EF1c b\u1ECB c\xF4ng k\xEDch s\u1EBD ph\u1EA3i ch\u1ECBu g\u1EA5p \u0111\xF4i s\xE1t th\u01B0\u01A1ng."
    },
    meta_data: {
      win_rate: 54.69,
      pick_rate: 12.36,
      ban_rate: 0.16
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_105",
    name: "Toro",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/105_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "M\xECnh \u0111\u1ED3ng da s\u1EAFt: Ngo\xE0i tung chi\xEAu \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng th\xEC khi v\xE0o giao tranh, Toro c\xF2n t\u0103ng d\u1EA7n chi\u1EBFn \xFD gi\xFAp nh\u1EADn mi\u1EC5n th\u01B0\u01A1ng. Chi\u1EBFn \xFD \u0111\u1EA7y thanh s\u1EBD gi\xFAp b\u1EA3n th\xE2n t\u0103ng t\u1ED1c \u0111\xE1nh. R\u1EDDi kh\u1ECFi giao tranh chi\u1EBFn \xFD gi\u1EA3m d\u1EA7n v\xE0 chuy\u1EC3n th\xE0nh h\u1ED3i m\xE1u",
      s1: "S\u1EEBng tr\xE2u: Toro h\xFAc t\u1EDBi tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt v\xE0 h\u1EA5t tungN\u1ED9i t\u1EA1i chi\xEAu: M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng th\u1EE9 3 s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng 3% m\xE1u t\u1ED1i \u0111a b\u1EA3n th\xE2n.",
      s2: "D\u01B0 ch\u1EA5n: Toro t\u1EE5 l\u1EF1c tr\xEAn m\u1EB7t \u0111\u1EA5t v\xE0 nh\u1EADn l\xE1 ch\u1EAFn. Sau 1 gi\xE2y h\u1EAFn g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, c\xE0ng g\u1EA7n trung t\xE2m th\xEC s\xE1t th\u01B0\u01A1ng c\xE0ng cao.N\u1EBFu trong ph\u1EA1m vi c\xF3 k\u1EBB \u0111\u1ECBch s\u1EBD l\xE0m m\u1EDBi S1 \u0111\u1ED3ng th\u1EDDi khi\u1EBFn ch\xFAng b\u1ECB gi\u1EA3m t\u1ED1c ch\u1EA1y v\xE0 \u0111\u01A1n v\u1ECB kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng s\u1EBD b\u1ECB k\xE9o v\u1EC1 trung t\xE2m ph\u1EA1m vi. Su\u1ED1t th\u1EDDi gian tung chi\xEAu v\u1EABn c\xF3 th\u1EC3 d\xF9ng c\xE1c chi\xEAu kh\xE1c.",
      s3: "\u0110\u1EA1i \u0111\u1ECBa ch\u1EA5n: Toro nh\u1EA3y \u0111\u1EBFn v\u1ECB tr\xED ch\u1EC9 \u0111\u1ECBnh v\xE0 li\xEAn t\u1EE5c tung chi\xEAu 3 l\u1EA7n g\xE2y ch\u1EA5n \u0111\u1ED9ng \u0111\u1EA1i \u0111\u1ECBa.L\u1EA7n 1 v\xE0 2: G\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD c\xF9ng l\xE0m ch\u1EADm \u0111\u1ECBch g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u1EDF v\xF9ng trung t\xE2m.L\u1EA7n 3: G\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t. Trong khi tung chi\xEAu c\xF3 th\u1EC3 d\xF9ng S1.Trong khi tung chi\xEAu c\xF3 th\u1EC3 d\xF9ng S1."
    },
    meta_data: {
      win_rate: 48.15,
      pick_rate: 29.43,
      ban_rate: 1.11
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_190",
    name: "Tulen",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/190_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "L\xF4i \u0111i\u1EC7n: N\u1ED9i t\u1EA1i: Chi\xEAu th\u1EE9c tr\xFAng \u0111\xEDch gi\xFAp Tulen t\xEDch l\u0169y d\u1EA5u \u1EA5n L\xF4i \u0110i\u1EC7n. Khi \u0111\u1EA1t t\u1EDBi 5 \u0111i\u1EC3m Tulen s\u1EBD t\u1EA1o ra 5 lu\u1ED3ng s\xE9t quanh b\u1EA3n th\xE2n, c\xF4ng k\xEDch k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn (\u01B0u ti\xEAn t\u01B0\u1EDBng) g\xE2y ra s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0m\u1ED7i lu\u1ED3ng. N\u1EBFu 1 m\u1EE5c ti\xEAu b\u1ECB nhi\u1EC1u lu\u1ED3ng s\xE9t t\u1EA5n c\xF4ng trong 1 gi\xE2y, s\xE1t th\u01B0\u01A1ng s\xE9t s\u1EBD b\u1ECB gi\u1EA3m (s\xE9t \u0111\xE1nh kh\xF4ng t\u1EA5n c\xF4ng c\xE1c \u0111\u01A1n v\u1ECB qu\xE1i r\u1EEBng kh\xF4ng trong tr\u1EA1ng th\xE1i chi\u1EBFn \u0111\u1EA5u).",
      s1: "L\xF4i quang: Tulen b\u1EAFn ra 3 tia s\xE9t v\u1EC1 ph\xEDa tr\u01B0\u1EDBc. M\u1ED7i tia tr\xFAng \u0111\xEDch g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. M\u1EE5c ti\xEAu tr\xFAng nhi\u1EC1u tia s\u1EBD ch\u1ECBu \xEDt s\xE1t th\u01B0\u01A1ng h\u01A1n t\u1EEB c\xE1c tia kh\xE1c. M\u1ED7i tia ch\u1EC9 c\xF3 th\u1EC3 g\xE2y 1 \u0111i\u1EC3m hi\u1EC7u \u1EE9ng\xA0L\xF4i \u0111i\u1EC7n.",
      s2: "L\xF4i \u0111\u1ED9ng: Tulen bi\u1EBFn \u1EA3o c\u1EF1c nhanh g\xE2y ra s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0t\u1EA1i c\u1EA3 v\xF9ng bi\u1EBFn \u0111\u1EBFn v\xE0 bi\u1EBFn \u0111i (n\u1EA1n nh\xE2n ch\u1ECBu s\xE1t th\u01B0\u01A1ng\xA0c\u1EA3 hai l\u01B0\u1EE3t bi\u1EBFn\xA0ch\u1EC9 nh\u1EADn\xA050% s\xE1t th\u01B0\u01A1ng \u1EDF l\u01B0\u1EE3t sau).N\u1EBFu k\u1EBB \u0111\u1ECBch trong v\xF2ng 5 gi\xE2y li\xEAn t\u1EE5c ch\u1ECBu \u1EA3nh h\u01B0\u1EDFng b\u1EDFi chi\xEAu n\xE0y s\u1EBD b\u1ECB l\xE0m ch\u1EADm 90% t\u1ED1c ch\u1EA1y gi\u1EA3m d\u1EA7n, Ngo\xE0i ra m\u1ED7i m\u1EE5c ti\xEAu tr\xFAng chi\xEAu s\u1EBD ch\u1EC9 ph\u1EA3i ch\u1ECBu 1 \u0111i\u1EC3m hi\u1EC7u \u1EE9ng\xA0L\xF4i \u0111i\u1EC7n.Chi\xEAu th\u1EE9c t\xEDch l\u0169y t\u1ED1i \u0111a 3 l\u1EA7n, th\u1EDDi gian h\u1ED3i\xA0gi\u1EEFa hai l\u1EA7n thi tri\u1EC3n li\xEAn ti\u1EBFp l\xE0 2 gi\xE2y.",
      s3: "L\xF4i \u0111i\u1EC3u: Tulen c\xF3 th\u1EC3 v\u1EEBa di chuy\u1EC3n, v\u1EEBa tung chi\xEAu tri\u1EC7u h\u1ED3i m\u1ED9t ch\xFA chim \u0111i\u1EC7n t\u1EA5n c\xF4ng m\u1EE5c ti\xEAu ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p,\xA0\u0111\u1ED3ng th\u1EDDi t\u1EF1 t\u0103ng cho b\u1EA3n th\xE2n 1 d\u1EA5u \u1EA5n L\xF4i \u0111i\u1EC7n.N\u1EBFu chim \u0111i\u1EC7n tr\u1EF1c ti\u1EBFp h\u1EA1 g\u1EE5c t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD l\u1EADp t\u1EE9c k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i L\xF4i \u0111i\u1EC7n, \u0111\u1ED3ng th\u1EDDi gi\u1EA3m m\u1EA1nh th\u1EDDi gian h\u1ED3i L\xF4i \u0111i\u1EC3u. Chim \u0111i\u1EC7n c\xF3 th\u1EC3 b\u1ECB c\u1EA3n l\u1EA1i b\u1EDFi nh\u1EEFng t\u01B0\u1EDBng \u0111\u1ECBch kh\xE1c, c\xF2n \u0111\u1ED1i v\u1EDBi c\xE1c \u0111\u01A1n v\u1ECB kh\xF4ng ph\u1EA3i t\u01B0\u1EDBng s\u1EBD ph\u1EA3i ch\u1ECBu s\xE1t th\u01B0\u01A1ng v\xE0 ch\u1ECBu \u0111\u1EA9y l\xF9i."
    },
    meta_data: {
      win_rate: 49.11,
      pick_rate: 12.86,
      ban_rate: 0.07
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_109",
    name: "Veera",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/109_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "M\xEA ho\u1EB7c: Sau khi tho\xE1t kh\u1ECFi giao tranh, Veera \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y",
      s1: "D\u01A1i \u0111\u1ECBa ng\u1EE5c: Veera n\xE9m ra m\u1ED9t con D\u01A1i \u0110\u1ECBa Ng\u1EE5c g\xE2y ra s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s2: "H\xF4n gi\xF3: N\u1EE5 h\xF4n c\u1EE7a Veera g\xE2y s\xE1t th\u01B0\u01A1ng cho k\u1EBB th\xF9 v\u1EDBi s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 cho\xE1ng n\u1EA1n nh\xE2n trong th\u1EDDi gian ng\u1EAFn.",
      s3: "Ti\u1EC3u qu\u1EF7: Veera tri\u1EC7u h\u1ED3i t\u1ED1i \u0111a 5 Ti\u1EC3u Qu\u1EF7 \u0111\u1EC3 t\u1EA5n c\xF4ng nh\u1EEFng k\u1EBB th\xF9 xung quanh. M\u1ED7i Ti\u1EC3u Qu\u1EF7 g\xE2y 1 l\u01B0\u1EE3ng s\xE1t th\u01B0\u01A1ng ph\xE9p.N\u1EBFu Ti\u1EC3u Qu\u1EF7 t\u1EA5n c\xF4ng c\xF9ng m\u1ED9t m\u1EE5c ti\xEAu, \u0111\xF2n \u0111\xE1nh th\u1EE9 hai tr\u1EDF \u0111i ch\u1EC9 g\xE2y ra 50% s\xE1t th\u01B0\u01A1ng."
    },
    meta_data: {
      win_rate: 48.35,
      pick_rate: 19.28,
      ban_rate: 2.77
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_520",
    name: "Veres",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/520_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Huy\u1EBFt x\xEDch: C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng \u0111\xEDch gi\xFAp Veres t\xEDch l\u0169y 1 \u0111i\u1EC3m n\u1ED9i t\u1EA1i Huy\u1EBFt x\xEDch; khi \u0111\u1EA1t \u0111\u1EE7 4 \u0111i\u1EC3m t\xEDch l\u0169y Veres s\u1EBD tung Huy\u1EBFt x\xEDch t\u1EA5n c\xF4ng t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD; n\u1EBFu c\xF3 t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng \u0111\xF2n, Veres h\u1ED3i l\u1EA1i 1 ph\u1EA7n s\xE1t th\u01B0\u01A1ng g\xE2y ra th\xE0nh m\xE1u. \u0110\u1EB7c bi\u1EC7t Veres c\xF2n \u0111\u01B0\u1EE3c gi\u1EA3m 1 gi\xE2y h\u1ED3i Song x\xEDch & Xi\u1EC1ng x\xEDch, v\xE0 2 gi\xE2y h\u1ED3i \u0110o\u1EA1t m\u1EC7nh x\xEDch. Ch\u01B0a h\u1EBFt, su\u1ED1t th\u1EDDi gian tung Huy\u1EBFt x\xEDch Veres c\xF3 th\u1EC3 tho\u1EA3i m\xE1i di chuy\u1EC3n, v\xE0 c\xF2n \u0111\u01B0\u1EE3c t\u0103ng kh\xE1ng hi\u1EC7u \u1EE9ng.",
      s1: "Song x\xEDch: Veres ph\xF3ng x\xEDch t\xE1ch l\xE0m hai s\u1EE3i t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. N\u1EA1n nh\xE2n x\u1EA5u s\u1ED1 tr\xFAng c\u1EA3 hai s\u1EE3i x\xEDch s\u1EBD b\u1ECB cho\xE1ng 1 gi\xE2y.  Ch\u01B0a h\u1EBFt, tung x\xEDch tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp Veres nh\u1EADn m\u1ED9t \u0111i\u1EC3m t\xEDch l\u0169y Huy\u1EBFt x\xEDch",
      s2: "Xi\u1EC1ng x\xEDch: Veres ph\xF3ng x\xEDch t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. \u0110\u1EB7c bi\u1EC7t s\u1EE3i x\xEDch s\u1EBD \u0111\u1EA9y l\xF9i k\u1EBB \u0111\u1ECBch n\u1EBFu ch\xFAng \u0111ang \u1EDF g\u1EA7n Veres, ho\u1EB7c k\xE9o k\u1EBB \u0111\u1ECBch v\u1EC1 tr\u01B0\u1EDBc m\u1EB7t n\u1EBFu ch\xFAng \u0111ang \u1EDF xa Veres; trong c\u1EA3 hai tr\u01B0\u1EDDng h\u1EE3p n\u1EA1n nh\xE2n \u0111\u1EC1u s\u1EBD b\u1ECB cho\xE1ng ngay sau \u0111\xF3. Ch\u01B0a h\u1EBFt, tung x\xEDch tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp Veres nh\u1EADn m\u1ED9t \u0111i\u1EC3m t\xEDch l\u0169y Huy\u1EBFt x\xEDch",
      s3: "\u0110o\u1EA1t m\u1EC7nh x\xEDch: Veres nh\u1EA3y \u0111\u1EBFn ph\xEDa tr\u01B0\u1EDBc tri\u1EC7u h\u1ED3i v\xF4 s\u1ED1 x\xEDch tr\u1ED3i l\xEAn t\u1EEB m\u1EB7t \u0111\u1EA5t t\u1EA5n c\xF4ng nh\u1EEFng k\u1EBB \u0111\u1ECBch trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng, g\xE2y m\xE1u \u0111\xE3 m\u1EA5t c\u1EE7a m\u1EE5c ti\xEAu s\xE1t th\u01B0\u01A1ng chu\u1EA9n Tung chi\xEAu tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp Veres ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i Cu\u1ED3ng huy\u1EBFt: t\u0103ng t\u1ED1c \u0111\xE1nh, c\xF4ng v\u1EADt l\xFD, xuy\xEAn gi\xE1p trong 4 gi\xE2y (n\u1EBFu k\u1EBFt li\u1EC5u t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD t\u0103ng th\xE0nh 10 gi\xE2y). Su\u1ED1t th\u1EDDi gian n\xE0y n\u1EBFu n\u1ED9i t\u1EA1i \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t tung Huy\u1EBFt x\xEDch tr\xFAng m\u1ED9t t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD gi\xFAp t\u0103ng th\xEAm 2 gi\xE2y tr\u1EA1ng th\xE1i Cu\u1ED3ng huy\u1EBFt"
    },
    meta_data: {
      win_rate: 50.38,
      pick_rate: 12.99,
      ban_rate: 0.11
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_111",
    name: "Violet",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/111_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "N\u1EA1p \u0111\u1EA1n: N\u1ED9i t\u1EA1i: \u0110\xE1nh th\u01B0\u1EDDng v\xE0 chi\xEAu 2, chi\xEAu 3\xA0tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\u1EA3m 0,5 s h\u1ED3i chi\xEAu c\u1EE7a \u0110\u1EA1n Xuy\xEAn Th\u1EA5u",
      s1: '\u0110\u1EA1n xuy\xEAn th\u1EA5u: "Violet l\u1ED9n v\u1EC1 ph\xEDa tr\u01B0\u1EDBc, c\u01B0\u1EDDng h\xF3a h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng ti\u1EBFp theo, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch \u0111\u1EE9ng theo \u0111\u01B0\u1EDDng th\u1EB3ng, \u0111\u1ED3ng th\u1EDDi gi\xFAp gia t\u0103ng t\u1EA7m \u0111\xE1nh trong tho\xE1ng ch\u1ED1c.L\u1ED9n v\u1EC1 ph\xEDa k\u1EBB \u0111\u1ECBch s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng 50% t\u1ED1c ch\u1EA1y trong 2 gi\xE2y."',
      s2: "L\u1EF1u \u0111\u1EA1n n\u1ED5: Violet n\xE9m l\u1EF1u \u0111\u1EA1n v\xE0o nh\u1EEFng k\u1EBB th\xF9 trong ph\u1EA1m vi, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng trong 1 gi\xE2y.",
      s3: "Ph\xE1o \u0111\u1EA1i: Violet t\u1EA5n c\xF4ng nh\u1EEFng k\u1EBB th\xF9 trong ph\u1EA1m vi v\u1EDBi ph\xE1t ph\xE1o c\u1EF1c \u0111\u1EA1i, g\xE2y s\xE1t th\u01B0\u01A1ng k\xE8m theo 12% m\xE1u \u0111\xE3 m\u1EA5t c\u1EE7a k\u1EBB \u0111\u1ECBch\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD."
    },
    meta_data: {
      win_rate: 47.51,
      pick_rate: 20.94,
      ban_rate: 0.04
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_529",
    name: "Vol'kath",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/529_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Ma Qu\xE2n: Volkath g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn m\u1EE5c ti\xEAu s\u1EBD c\u1ED9ng d\u1ED3n \u1EA5n k\xFD ma qu\xE2n, t\xEDch l\u0169y \u0111\u1EE7 4 t\u1EA7ng s\u1EBD n\u1ED5 tung g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi gi\xFAp Volkath nh\u1EADn \u0111\u01B0\u1EE3c l\xE1 ch\u1EAFn.",
      s1: "B\xE1 V\u01B0\u01A1ng Tr\u1EA3m: Volkath vung \u0111ao ch\xE9m ngang g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn \u0111\u1ECBch trong ph\u1EA1m vi xung quanh, n\u1EBFu \u0111\xE1nh tr\xFAng m\u1EE5c ti\xEAu d\xEDnh \u1EA5n k\xFD ma qu\xE2n, h\u1EAFn s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\xE0 l\xE0m cho\xE1ng.",
      s2: "B\xE1 v\u01B0\u01A1ng tr\u1EA3o: Volkath tung B\xE1 v\u01B0\u01A1ng tr\u1EA3o g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn t\u01B0\u1EDBng \u0111\u1ECBch khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB l\xE0m ch\u1EADm tho\xE1ng ch\u1ED1c v\xE0 \u0111\xE1nh d\u1EA5u m\u1EE5c ti\xEAu, su\u1ED1t th\u1EDDi gian n\xE0y n\u1EA1n nh\xE2n s\u1EBD b\u1ECB l\u1ED9 di\u1EC7n. Trong l\xFAc c\xF2n b\u1ECB \u0111\xE1nh d\u1EA5u, Volkath c\xF3 th\u1EC3 t\xE1i k\xEDch ho\u1EA1t chi\xEAu \u0111\u1EC3 bi\u1EBFn \u0111\u1EBFn c\u1EA1nh m\u1EE5c ti\xEAu v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng theo m\xE1u n\u1EA1n nh\xE2n \u0111\xE3 m\u1EA5t th\xE0nh s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. N\u1EA1n nh\xE2n ch\u1ECBu \u0111\xE1nh d\u1EA5u b\u1ECB h\u1EA1 b\u1EDFi chi\xEAu n\xE0y s\u1EBD khi\u1EBFn Volkath l\u1EADp t\u1EE9c ho\xE0n t\u1EA5t th\u1EDDi gian h\u1ED3i chi\xEAu B\xE1 v\u01B0\u01A1ng tr\u1EA3o.",
      s3: "B\u1EA5t t\u1EED ma th\xE2n: Volkath tri\u1EC7u h\u1ED3i s\u1EE9c m\u1EA1nh h\u1ED7n mang gi\xFAp tho\xE1t kh\u1ECFi c\xE1c tr\u1EA1ng th\xE1i kh\u1ED1ng ch\u1EBF \u0111ang g\xE1nh ch\u1ECBu v\xE0 nh\u1EADn mi\u1EC5n th\u01B0\u01A1ng, \u0111\u1ED3ng th\u1EDDi tr\u1EDF th\xE0nh k\u1EF5 s\u0129, khi\u1EBFn c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD trong ph\u1EA1m vi h\xECnh tr\xF2n. Su\u1ED1t th\u1EDDi gian n\xE0y Volkath c\xF3 th\u1EC3 t\xE1i k\xEDch ho\u1EA1t chi\xEAu \u0111\u1EC3 \u0111\u1EA9y lui \u0111\u1ECBch xung quanh v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi bi\u1EBFn th\xE0nh Ch\xFAa t\u1EC3 h\u1EAFc \xE1m.Sau khi bi\u1EBFn th\xE2n Volkath \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh, t\u1ED1c ch\u1EA1y v\xE0 \u0111\u01B0\u1EE3c b\u1EA5t t\u1EED. Khi b\u1EA5t t\u1EED k\u1EBFt th\xFAc Volkath s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i m\xE1u.Ma uy: trong tr\u1EA1ng th\xE1i k\u1EF5 s\u0129, m\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD c\u1ED9ng d\u1ED3n 1 t\u1EA7ng ma uy, t\u1ED1i \u0111a 3 t\u1EA7ng. M\u1ED7i t\u1EA7ng ma uy s\u1EBD gi\xFAp Volkath k\xE9o d\xE0i th\u1EDDi gian b\u1EA5t t\u1EED."
    },
    meta_data: {
      win_rate: 54.39,
      pick_rate: 7.11,
      ban_rate: 0.59
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_194",
    name: "Wiro",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/194_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "D\u1EA5u \u1EA5n 212: N\u1ED9i t\u1EA1i: Wiro c\u01B0\u1EDDng ho\xE1 c\u1EA3 gi\xE1p v\u1EADt l\xFD l\u1EABn gi\xE1p ph\xE9p (v\xF4 hi\u1EC7u ho\xE1 khi chi\xEAu \u0111ang h\u1ED3i).  Khi Wiro nh\u1EADn s\xE1t th\u01B0\u01A1ng ch\xED t\u1EED, anh kh\xF4ng ch\u1EBFt m\xE0 \u0111\u01B0\u1EE3c h\u1ED3i 60% m\xE1u. \u0110\u1ED5i l\u1EA1i, trong\xA04.5 gi\xE2y\xA0Wiro s\u1EBD mi\u1EC5n nhi\u1EC5m kh\u1ED1ng ch\u1EBF, nh\u01B0ng kh\xF4ng th\u1EC3 h\xE0nh \u0111\u1ED9ng v\xE0 b\u1ECB gi\u1EA3m 25% c\u1EA3 hai lo\u1EA1i gi\xE1p.  \u0110\u1ED3ng th\u1EDDi, s\u1EBD c\xF3 3 d\u1EA5u \u1EA5n xung quanh anh, \u0111\u1ED3ng \u0111\u1ED9i gi\u1EABm l\xEAn s\u1EBD gi\xFAp Wiro v\xE0 t\u01B0\u1EDBng \u0111\xF3 h\u1ED3i 10% m\xE1u. N\u1EBFu 3 d\u1EA5u \u1EA5n \u0111\u1EC1u \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t, ho\u1EB7c qua 4.5 gi\xE2y, Wiro s\u1EBD g\u1EA7m l\xEAn g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p, v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a k\u1EBB \u0111\u1ECBch. B\u1EA3n th\xE2n Wiro nh\u1EADn t\u1ED1c \u0111\xE1nh v\xE0 t\u1ED1c ch\u1EA1y trong 5 gi\xE2y k\u1EBF.",
      s1: "R\xECu chi\u1EBFn l\u1EF1c: Wiro l\xE0m m\u1EDBi l\u1EA1i \u0111\xF2n \u0111\xE1nh, c\u01B0\u1EDDng ho\xE1 ba \u0111\xF2n \u0111\xE1nh k\u1EBF ti\u1EBFp. M\u1ED7i \u0111\xF2n s\u1EBD g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Ri\xEAng \u0111\xF2n th\u1EE9 ba s\u1EBD h\u1EA5t tung k\u1EBB \u0111\u1ECBch trong 0.75 gi\xE2y",
      s2: "G\u0103ng chi\u1EBFn l\u1EF1c: Wiro \u1EE7i k\u1EBB \u0111\u1ECBch v\u1EC1 ph\xEDa ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. N\u1EBFu k\u1EBB \u0111\u1ECBch b\u1ECB \u0111\u1EA9y v\xE0o t\u01B0\u1EDDng s\u1EBD nh\u1EADn th\xEAm 50% s\xE1t th\u01B0\u01A1ng t\u1EEB chi\xEAu th\u1EE9c. Chi\xEAu th\u1EE9c n\xE0y s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn tr\u1EE5 k\u1EBB \u0111\u1ECBch.",
      s3: "Th\u1EA7n l\u1EF1c 212: Wiro v\u1EADn s\u1EE9c tung r\xECu g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD k\xE8m 1 gi\xE2y h\u1EA5t tung l\xEAn k\u1EBB \u0111\u1ECBch xung quanh. T\u1EE5 l\u1EF1c c\xE0ng l\xE2u, ph\u1EA1m vi \u1EA3nh h\u01B0\u1EDFng v\xE0 s\xE1t th\u01B0\u01A1ng c\xE0ng l\u1EDBn. M\u1ED7i n\u1EA1n nh\xE2n r\u01A1i xu\u1ED1ng s\u1EBD g\xE2y 50% s\xE1t th\u01B0\u01A1ng chi\xEAu th\u1EE9c l\xEAn k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn (n\u1EA1n nh\xE2n r\u01A1i kh\xF4ng ch\u1ECBu th\xEAm s\xE1t th\u01B0\u01A1ng n\xE0y). Wiro c\xF3 th\u1EC3 di chuy\u1EC3n khi tung chi\xEAu, v\xE0 h\u1ED3i chi\xEAu s\u1EBD gi\u1EA3m \u0111i 80% n\u1EBFu hu\u1EF7 chi\xEAu.N\u1ED9i t\u1EA1i: Khi Wiro tung chi\xEAu ho\u1EB7c c\u01B0\u1EDDng ho\xE1 \u0111\xE1nh th\u01B0\u1EDDng s\u1EBD t\u1EA1o l\u1ED1c xo\xE1y xung quanh b\u1EA3n th\xE2n trong 3 gi\xE2y, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i gi\xE2y l\xEAn m\u1ECDi k\u1EBB \u0111\u1ECBch, k\u1EC3 c\u1EA3 c\xF4ng tr\xECnh."
    },
    meta_data: {
      win_rate: 47.79,
      pick_rate: 0.35,
      ban_rate: 0.03
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Y'Bneth"
    ]
  },
  {
    id: "hero_508",
    name: "Wisp",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/508_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "T\u1EF1 h\u1EE7y: Sau khi b\u1ECB h\u1EA1 g\u1EE5c, Wisp t\u1EF1 h\u1EE7y b\u1EB1ng s\u1ED1 t\u1EA1c \u0111\u1EA1n c\xF2n th\u1EEBa l\u1EA1i, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm 25% t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng trong 1.5 gi\xE2y. T\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng nhi\u1EC1u \u0111\u1EA1n t\u1EA1c ch\u1EC9 ph\u1EA3i ch\u1ECBu 50% s\xE1t th\u01B0\u01A1ng \u1EDF c\xE1c l\u1EA7n sau.",
      s1: "Ph\xE1o \u0111\u1ED9ng n\u0103ng: Wisp l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc \u0111\u1ED3ng th\u1EDDi k\xEDch ho\u1EA1t ch\u1EBF \u0111\u1ED9 ph\xE1o k\xEDch. M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng trong th\u1EDDi gian n\xE0y b\u1EAFn k\xE8m ph\xE1o c\u1ED1i g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn m\u1EE5c ti\xEAu v\xE0 50% l\xEAn\xA0nh\u1EEFng n\u1EA1n nh\xE2n l\xE2n c\u1EADn, \u0111\u1ED3ng th\u1EDDi\xA0Wisp \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c \u0111\xE1nh.",
      s2: "Ph\xE1o YOYO: Wisp b\u1EAFn ph\xE1o YOYO theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu d\u1ECDc \u0111\u01B0\u1EDDng l\u0103n, \u0111\u1ED3ng th\u1EDDi l\xE0m ch\u1EADm 30% t\u1ED1c ch\u1EA1y c\u1EE7a n\u1EA1n nh\xE2n trong v\xF2ng 1 gi\xE2y. Ph\xE1o YOYO l\u0103n t\u1EDBi \u0111i\u1EC3m cu\u1ED1i s\u1EBD ph\xE1t n\u1ED5, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi \u1EA3nh h\u01B0\u1EDFng, k\xE8m hi\u1EC7u \u1EE9ng cho\xE1ng. T\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng ph\xE1o gi\xFAp Wisp \u0111\u01B0\u1EE3c gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu n\xE0y.",
      s3: "Ph\xE1o Cao X\u1EA1: Wisp ni\u1EC7m ch\xFA t\u1EADp trung gi\u1EEF nguy\xEAn v\u1ECB tr\xED \u0111\u1EC3 oanh k\xEDch v\xF9ng ch\u1EC9 \u0111\u1ECBnh li\xEAn t\u1EE5c 6 \u0111\u1EE3t, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. S\xE1t th\u01B0\u01A1ng n\xE0y c\xF3 th\u1EC3 ch\xED m\u1EA1ng, g\xE2y th\xEAm 50% s\xE1t th\u01B0\u01A1ng. Chi\xEAu th\u1EE9c n\xE0y c\u1EA7n ni\u1EC7m ch\xFA gi\u1EEF nguy\xEAn v\u1ECB tr\xED, t\u1ED1i \u0111a k\xE9o d\xE0i 3 gi\xE2y. Sau 0.6 gi\xE2y n\u1EBFu di chuy\u1EC3n ho\u1EB7c tung chi\xEAu kh\xE1c s\u1EBD ng\u1EAFt chi\xEAu.  Trong th\u1EDDi gian tung chi\xEAu, k\u1EBB \u0111\u1ECBch b\u1ECB l\xE0m ch\u1EADm."
    },
    meta_data: {
      win_rate: 56.05,
      pick_rate: 7.56,
      ban_rate: 0.02
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_504",
    name: "Wonder Woman",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/504_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Khi\xEAn th\u1EA7n l\u1EF1c: "Sau m\u1ED7i 2 \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng li\xEAn ti\u1EBFp, Wonder Woman s\u1EBD ph\xF3ng khi\xEAn t\u1EA5n c\xF4ng nh\u1EEFng k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc trong \u0111\xF2n th\u1EE9 ba, g\xE2y th\xEAm\xA0s\xE1t th\u01B0\u01A1ng chu\u1EA9n v\xE0 gi\u1EA3m t\u1ED1c ch\u1EA1y c\u1EE7a k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu.\u0110\u1ED3ng th\u1EDDi, Wonder Woman \u0111\u01B0\u1EE3c h\u1ED3i m\xE1u (g\u1EA5p ba hi\u1EC7u l\u1EF1c n\u1EBFu tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch)."',
      s1: 'Khi\xEAn ki\u1EBFm li\xEAn k\xEDch: "Wonder Woman l\u01B0\u1EDBt \u0111i t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch b\u1EB1ng khi\xEAn g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\xE1c n\u1EA1n nh\xE2n tr\xFAng \u0111\xF2n. Chi\xEAu tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp b\u1EA3n th\xE2n t\u0103ng mi\u1EC5n th\u01B0\u01A1ng.Wonder Woman c\xF3 th\u1EC3 ti\u1EBFp t\u1EE5c vung g\u01B0\u01A1m t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD t\u01B0\u01A1ng \u0111\u01B0\u01A1ng \u0111\xF2n t\u1EA5n c\xF4ng b\u1EB1ng khi\xEAn. N\u1EA1n nh\xE2n tr\xFAng m\u0169i ki\u1EBFm ch\u1ECBu g\u1EA5p \u0111\xF4i s\xE1t th\u01B0\u01A1ng."',
      s2: 'D\xE2y th\u1EEBng ch\xE2n th\u1EADt: "Wonder Woman ph\xF3ng d\xE2y th\u1EEBng v\u1EC1 ph\xEDa tr\u01B0\u1EDBc, n\u1EBFu tr\xFAng k\u1EBB \u0111\u1ECBch v\u1EDBi m\xE1u cao h\u01A1n 50% s\u1EBD k\xE9o b\u1EA3n th\xE2n v\u1EC1 ph\xEDa m\u1EE5c ti\xEAu, n\u1EBFu th\u1EA5p h\u01A1n s\u1EBD k\xE9o m\u1EE5c ti\xEAu v\u1EC1 ph\xEDa b\u1EA3n th\xE2n.D\xE2y th\u1EEBng\xA0g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 gi\u1EA3m h\u1ED3i chi\xEAu khi tr\xFAng \u0111\xEDch."',
      s3: 'Gi\xE1p tay th\u1EA7n k\xEC: "Wonder Woman ch\u1EAFp tay ph\xF3ng s\xF3ng n\u0103ng l\u01B0\u1EE3ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m cho\xE1ng nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\u01B0\u1EDBc m\u1EB7t. \u0110\u1ED3ng th\u1EDDi khi\u1EBFn b\u1EA3n th\xE2n v\xE0 \u0111\u1ED3ng minh ph\xEDa sau nh\u1EADn l\xE1 ch\u1EAFn ch\u1EB7n s\xE1t th\u01B0\u01A1ng.T\u1EA5t c\u1EA3 c\xE1c m\u1EE5c ti\xEAu trong v\xF9ng hi\u1EC7u l\u1EF1c \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y. Su\u1ED1t th\u1EDDi gian tung chi\xEAu Wonder Woman \u0111\u01B0\u1EE3c t\u0103ng mi\u1EC5n th\u01B0\u01A1ng."'
    },
    meta_data: {
      win_rate: 51.2,
      pick_rate: 0.5,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_167",
    name: "Wukong",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/167_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'V\xF4 \u0111\u1ECBch thi\xEAn h\u1EA1: "N\u1ED9i t\u1EA1i: M\u1ED7i l\u1EA7n Ng\u1ED9 Kh\xF4ng tung m\u1ED9t chi\xEAu th\u1EE9c, \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng ti\u1EBFp theo c\u1EE7a h\u1EAFn \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a g\xE2y th\xEAm\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi khi\u1EBFn h\u1EAFn l\u1EADp t\u1EE9c \xE1p s\xE1t m\u1EE5c ti\xEAu.\u0110\u1EB7c bi\u1EC7t Ng\u1ED9 Kh\xF4ng s\u1EDF h\u1EEFu s\u1EB5n m\u1ED9t l\u01B0\u1EE3ng T\u1EF7 l\u1EC7 ch\xED m\u1EA1ng."',
      s1: "Ph\xE2n Th\xE2n Thu\u1EADt: Ng\u1ED9 Kh\xF4ng l\u1EADp t\u1EE9c ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i t\xE0ng h\xECnh. Sau khi tung chi\xEAu, Ng\u1ED9 Kh\xF4ng s\u1EBD \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y trong th\u1EDDi gian ng\u1EAFn.",
      s2: "C\xE2n \u0111\u1EA9u v\xE2n: Ng\u1ED9 Kh\xF4ng c\u01B0\u1EDDng h\xF3a b\u1EA3n th\xE2n gi\xFAp t\u0103ng gi\xE1p v\u1EADt l\xFD c\xF9ng gi\xE1p ph\xE9p trong 1 th\u1EDDi gian, r\u1ED3i l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc s\u1EB5n s\xE0ng \u0111\u1EA1i chi\u1EBFn 500 hi\u1EC7p.",
      s3: "G\u1EADy nh\u01B0 \xFD: Ng\u1ED9 Kh\xF4ng vung g\u1EADy t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch xung quanh, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m cho\xE1ng k\u1EBB \u0111\u1ECBch. Ng\u1ED9 Kh\xF4ng c\xF3 th\u1EC3 k\xEDch ho\u1EA1t chi\xEAu th\u1EE9c m\u1ED9t l\u1EA7n n\u1EEFa trong 5 gi\xE2y \u0111\u1EC3\xA0c\xF3 th\u1EC3 gi\u1EA3i tr\u1EEB Hi\u1EC7u \u1EE9ng gi\u1EA3m t\u1ED1c c\u1EE7a b\u1EA3n th\xE2n v\xE0\xA0t\xE0ng h\xECnh, gia t\u0103ng t\u1ED1c ch\u1EA1y trong th\u1EDDi gian ng\u1EAFn."
    },
    meta_data: {
      win_rate: 48.15,
      pick_rate: 13.55,
      ban_rate: 0.63
    },
    counters: [
      "Enzo",
      "Aoi",
      "Bright"
    ]
  },
  {
    id: "hero_149",
    name: "Xeniel",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/149_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "S\xE1ch Th\xE1nh T\xEDch: N\u1ED9i t\u1EA1i:\xA0M\u1ED7i \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng th\u1EE9 ba g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng d\u1EF1a tr\xEAn m\xE1u t\u1ED1i \u0111a b\u1EA3n th\xE2n\xA0th\xE0nh\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p.",
      s1: "Th\u1EA7n H\u1ED9 Th\u1EC3: Xeniel t\u1EF1 ph\u1EE7 m\u1ED9t l\u1EDBp b\u1EA3n h\u1ED9 l\xEAn b\u1EA3n th\xE2n, gi\xFAp ch\u1EB7n s\xE1t th\u01B0\u01A1ng. Sau tho\xE1ng ch\u1ED1c, Xeniel c\xF3 th\u1EC3 t\u1EF1 h\u1EE7y khi\xEAn, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn v\xE0 l\xE0m ch\u1EADm n\u1EA1n nh\xE2n tr\xFAng chi\xEAu. N\u1EBFu l\u1EDBp b\u1EA3o h\u1ED9 b\u1ECB ph\xE1 s\u1EBD kh\xF4ng th\u1EC3 g\xE2y s\xE1t th\u01B0\u01A1ng.",
      s2: "Ch\xF9y Th\u1EA7n L\u1EF1c: Xeniel nh\u1EA3y \u0111\u1EBFn m\u1ED9t v\xF9ng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 h\u1EA5t tung nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xFAng chi\xEAu.",
      s3: "S\u1EE9 M\u1EC7nh C\u1EE9u Th\u1EC3: Xeniel ch\u1ECDn m\u1ED9t t\u01B0\u1EDBng \u0111\u1ED3ng minh \u0111\u1EC3 t\u1EB7ng l\xE1 ch\u1EAFn. Sau khi t\u1EB7ng l\xE1 ch\u1EAFn, Xeniel s\u1EBD ni\u1EC7m ch\xFA r\u1ED3i ph\xF2ng l\xEAn tr\u1EDDi bay \u0111\u1EBFn m\u1EE5c ti\xEAu sau m\u1ED9t th\u1EDDi gian ng\u1EAFn. Khi Xeniel gi\xE1ng tr\u1EA7n, h\u1EAFn g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 gi\xFAp \u0111\u1ED3ng m\xECnh \u0111\u01B0\u1EE3c ch\u1ECDn h\u1ED3i m\u1ED9t ph\u1EA7n m\xE1u t\u1ED1i \u0111a. N\u1EBFu l\xE1 ch\u1EAFn m\xE0 Xeniel t\u1EB7ng cho \u0111\u1ED3ng minh b\u1ECB ph\xE1 v\u1EE1 ho\u1EB7c h\u1EBFt th\u1EDDi gian, b\u1EA3n th\xE2n l\xE1 ch\u1EAFn s\u1EBD g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi."
    },
    meta_data: {
      win_rate: 48.02,
      pick_rate: 0.61,
      ban_rate: 0.01
    },
    counters: [
      "Ormarr",
      "Y'Bneth",
      "Roxie"
    ]
  },
  {
    id: "hero_509",
    name: "Y'Bneth",
    role: [
      "\u0110\u1EE1 \u0111\xF2n"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/509_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "\u0110\u1EA5t m\u1EB9: M\u1ED7i khi ti\u1EBFn v\xE0o b\u1EE5i c\u1ECF, Y'Bneth nh\u1EADn \u0111\u01B0\u1EE3c b\xF9a l\u1EE3i h\u1ED3i m\xE1u v\xE0 n\u0103ng l\u01B0\u1EE3ng m\u1ED7i gi\xE2y, k\xE9o d\xE0i trong 5 gi\xE2y. Hi\u1EC7u \u1EE9ng k\u1EBFt th\xFAc ngay khi Y'Bneth ti\u1EBFn v\xE0o giao tranh.",
      s1: "D\xE2y leo: Y'Bneth du\u1ED7i tay t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\xE1c n\u1EA1n nh\xE2n tr\xFAng chi\xEAu. M\u1ECDi chi\xEAu tr\xFAng \u0111\xEDch 5 l\u1EA7n (t\u01B0\u1EDBng t\xEDnh 2) gi\xFAp chi\xEAu \u0111\u01B0\u1EE3c l\xE0m m\u1EDBi v\xE0 cho ph\xE9p Y'bneth tung C\xE2y \u0110\u1ED5.C\xE2y \u0110\u1ED5: Y'Bneth nh\u1EADn l\xE1 ch\u1EAFn v\xE0 t\xF4ng theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi h\u1EA5t lui c\xE1c n\u1EA1n nh\xE2n tr\xFAng \u0111\xEDch.",
      s2: "Thi\xEAn nhi\xEAn v\u1ED7 v\u1EC1: Y'Bneth vung tay t\u1EA5n c\xF4ng c\xE1c k\u1EBB \u0111\u1ECBch trong v\xF9ng h\xECnh n\xF3n ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi \u0111\u1EA9y m\u1EE5c ti\xEAu v\xE0o trung t\xE2m; n\u1EBFu c\xF3 hai n\u1EA1n nh\xE2n tr\u1EDF l\xEAn \u0111\u1ED3ng th\u1EDDi tr\xFAng chi\xEAu th\xEC ch\xFAng s\u1EBD ph\u1EA3i ch\u1ECBu th\xEAm 50% s\xE1t th\u01B0\u01A1ng v\xE0 b\u1ECB cho\xE1ng.",
      s3: "H\u1EA1t gi\u1ED1ng sinh m\u1EC7nh: Y'bneth r\u01A1i v\xE0o gi\u1EA5c m\u1ED9ng ng\xE0n thu, t\u1EF1 bao ph\u1EE7 b\u1EA3n th\xE2n trong m\u1ED9t l\u1EDBp l\xE1 ch\u1EAFn gi\xFAp ch\u1EB7n s\xE1t th\u01B0\u01A1ng, \u0111\u1ED3ng th\u1EDDi t\u1EA1o ra m\u1ED9t v\xF9ng \u0111\u1EA5t th\u1EA7n b\xED khi\u1EBFn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch trong t\u1EA7m \u1EA3nh h\u01B0\u1EDFng b\u1ECB gi\u1EA3m t\u1ED1c ch\u1EA1y. Su\u1ED1t th\u1EDDi gian n\xE0y, Y'bneth mi\u1EC5n nhi\u1EC5m kh\u1ED1ng ch\u1EBF v\xE0 gieo r\u1EAFc t\u1ED1i \u0111a 20 \u0111\u1EE3t h\u1EA1t gi\u1ED1ng g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD trong v\xF9ng ch\u1EC9 \u0111\u1ECBnh. N\u1EBFu c\xF3 t\u01B0\u1EDBng \u0111\u1ECBch tr\xFAng chi\xEAu s\u1EBD gi\xFAp b\u1EA3n th\xE2n h\u1ED3i m\xE1u. \u0110\u1EB7c bi\u1EC7t n\u1EA1n nh\xE2n tr\xFAng 8 \u0111\u1EE3t c\xF4ng k\xEDch s\u1EBD b\u1ECB cho\xE1ng."
    },
    meta_data: {
      win_rate: 50.24,
      pick_rate: 4.01,
      ban_rate: 0.15
    },
    counters: [
      "Ormarr",
      "Xeniel",
      "Roxie"
    ]
  },
  {
    id: "hero_544",
    name: "Yan",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/544_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Thi\xEAn s\u01A1n ki\u1EBFm: M\u1ED7i khi d\xF9ng chi\xEAu 1, chi\xEAu 2, Yan \u0111\u01B0\u1EE3c t\xEDch 1 c\u1ED9ng d\u1ED3n. \u0110\u1EE7 2 c\u1ED9ng d\u1ED3n s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng ti\u1EBFp theo. C\u0103n c\u1EE9 theo chi\xEAu n\xE0o d\xF9ng tr\u01B0\u1EDBc \u0111\xF3 \u0111\u1EC3 c\xF3 hi\u1EC7u \u1EE9ng c\u01B0\u1EDDng h\xF3a ri\xEAng. \u0110\xE1nh tr\xFAng t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp b\u1EA3n th\xE2n nh\u1EADn \u0111\u01B0\u1EE3c h\u1ED3i m\xE1u v\xE0 t\u0103ng t\u1ED1c \u0111\xE1nh.",
      s1: "Ph\xE1 v\xE2n ki\u1EBFm: D\xF9ng v\u0169 kh\xED g\xE2y s\xE1t th\u01B0\u01A1ng, l\xE0m ch\u1EADm \u0111\u1ECBch v\xE0 c\u01B0\u1EDDng h\xF3a b\u1EA3n th\xE2n. Sau \u0111\xF3 Yan t\u1EE5 l\u1EF1c nh\u1EA3y l\xEAn v\xE0 ch\xE9m xu\u1ED1ng g\xE2y s\xE1t th\u01B0\u01A1ng trong ph\u1EA1m vi v\xE0 h\u1EA5t tung \u0111\u1ECBch.",
      s2: "Ho\xE0nh long ki\u1EBFm: L\u01B0\u1EDBt nhanh theo qu\u1EF9 \u0111\u1EA1o, nh\u1EADn mi\u1EC5n kh\u1ED1ng v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt. Khi \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a, s\u1EBD c\xF3 hi\u1EC7u \u1EE9ng ri\xEAng.",
      s3: "Th\xE1nh quang b\xFAt: Yan gi\u1EA3i ph\xF3ng to\xE0n b\u1ED9 phong \u1EA5n v\xE0 nh\u1EADn mi\u1EC5n kh\u1ED1ng \u0111\u1ED3ng th\u1EDDi mi\u1EC5n th\u01B0\u01A1ng. Sau 1 gi\xE2y, Yan g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn k\u1EBB \u0111\u1ECBch trong ph\u1EA1m vi v\xE0 khi\xEAn giai \u0111o\u1EA1n 2 c\u1EE7a chi\xEAu cu\u1ED1i ti\u1EBFn v\xE0o tr\u1EA1ng th\xE1i c\u01B0\u1EDDng h\xF3a."
    },
    meta_data: {
      win_rate: 48.65,
      pick_rate: 1.51,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_154",
    name: "Yena",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/154_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "B\xE1n nguy\u1EC7t tr\u1EA3m: Khi Yena d\xF9ng Song \u0111ao, c\xF4 \u0111\u01B0\u1EE3c t\u0103ng t\u1ED1c ch\u1EA1y. \u0110\u1EB7c bi\u1EC7t m\u1ED7i l\u1EA7n c\xF4 s\xE1t th\u01B0\u01A1ng t\u01B0\u1EDBng \u0111\u1ECBch s\u1EBD g\xE2y k\xE8m hi\u1EC7u \u1EE9ng Nguy\u1EC7t tr\u1EA3m; khi t\xEDch \u0111\u1EE7 5 \u0111i\u1EC3m c\u1ED9ng d\u1ED3n hi\u1EC7u \u1EE9ng Yena s\u1EBD g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB c\xE2m l\u1EB7ng v\xE0 gi\u1EA3m t\u1ED1c ch\u1EA1y.Yena c\u1EA7n c\xF3 m\u1ED9t kho\u1EA3ng th\u1EDDi gian h\u1ED3i tr\u01B0\u1EDBc khi c\xF3 th\u1EC3 \xE1p d\u1EE5ng Nguy\u1EC7t tr\u1EA3m l\xEAn c\xF9ng m\u1ED9t k\u1EBB \u0111\u1ECBch.  Khi Yena d\xF9ng Nguy\u1EC7t \u0111ao, c\xF4 b\u1ECB gi\u1EA3m t\u1ED1c \u0111\xE1nh, nh\u01B0ng b\xF9 l\u1EA1i \u0111\u01B0\u1EE3c t\u0103ng s\xE1t th\u01B0\u01A1ng g\xE2y ra. Ch\u01B0a h\u1EBFt, su\u1ED1t th\u1EDDi gian Yena tung c\xE1c k\u1EF9 n\u0103ng, c\xF4 \u0111\u01B0\u1EE3c mi\u1EC5n hi\u1EC7u \u1EE9ng v\xE0 mi\u1EC5n th\u01B0\u01A1ng.",
      s1: "To\xE1i nguy\u1EC7t tr\u1EA3m / T\u1EE5 nguy\u1EC7t tr\u1EA3m: Loan \u0111ao: To\xE1i nguy\u1EC7t tr\u1EA3m  Yena l\u01B0\u1EDBt theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh vung \u0111ao ch\xE9m \u0111\u1ECBch g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD; n\u1EBFu l\u01B0\u1EE3t \u0111\u1EA7u tr\xFAng \u0111\xEDch, Yena c\xF3 th\u1EC3 l\u01B0\u1EDBt ti\u1EBFp l\u01B0\u1EE3t hai trong v\xF2ng 5 gi\xE2y. Chi\xEAu th\u1EE9c n\xE0y c\xF3 th\u1EC3 tung t\u1ED1i \u0111a 2 l\u01B0\u1EE3t tr\u01B0\u1EDBc khi b\u1EAFt \u0111\u1EA7u th\u1EDDi gian h\u1ED3i chi\xEAu.Vi\xEAn \u0111ao: T\u1EE5 nguy\u1EC7t tr\u1EA3m  Yena\xA0t\u1EE5 l\u1EF1c 2 gi\xE2y r\u1ED3i vung Nguy\u1EC7t \u0111ao g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh; t\u1EE5 l\u1EF1c c\xE0ng l\xE2u s\xE1t th\u01B0\u01A1ng c\xE0ng m\u1EA1nh.  N\u1EBFu c\xF3 n\u1EA1n nh\xE2n tr\xFAng chi\xEAu, Yena c\xF3 th\u1EC3 d\xF9ng\xA0T\u1EE5 nguy\u1EC7t tr\u1EA3m l\u1EA7n 2 trong v\xF2ng 5 gi\xE2y k\u1EBF.",
      s2: "Lu\xE2n nguy\u1EC7t tr\u1EA3m / T\u1EE9 nguy\u1EC7t tr\u1EA3m: Song \u0111ao - Lu\xE2n nguy\u1EC7t tr\u1EA3m:  Yena ph\xF3ng Song \u0111ao theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, Song \u0111ao xoay tr\xF2n li\xEAn t\u1EE5c t\u1EA1i \u0111i\u1EC3m cu\u1ED1i, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn m\u1EE5c ti\xEAu trong ph\u1EA1m vi v\xE0 gi\u1EA3m t\u1ED1c ch\u1EA1y.Nguy\u1EC7t \u0111ao - T\u1EE9 nguy\u1EC7t tr\u1EA3m: Yena vung Nguy\u1EC7t \u0111ao ch\xE9m 4 l\u1EA7n\xA0theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh, m\u1ED7i l\u1EA7n g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD, \u0111\u1ED3ng th\u1EDDi m\u1ED7i nh\xE1t ch\xE9m s\u1EBD khi\u1EBFn m\u1EE5c ti\xEAu b\u1ECB l\xE0m ch\u1EADm v\xE0 \u0111\u1EA9y l\xF9i. Ri\xEAng \u0111\u1EE3t 4 s\u1EBD h\u1EA5t v\u0103ng m\u1ECDi m\u1EE5c ti\xEAu.\xA0\u0110\u1EB7c bi\u1EC7t n\u1EBFu Yena ti\u1EBFn l\u1EA1i g\u1EA7n Song \u0111ao s\u1EBD t\u1EF1 \u0111\u1ED9ng thu h\u1ED3i v\u0169 kh\xED v\xE0 gi\xFAp b\u1EA3n th\xE2n gi\u1EA3m th\u1EDDi gian h\u1ED3i chi\xEAu n\xE0y, b\u1EA5t k\u1EC3 \u0111ang c\u1EA7m Song \u0111ao hay Nguy\u1EC7t \u0111ao.",
      s3: "M\xE3n nguy\u1EC7t tr\u1EA3m / Ho\xE0nh nguy\u1EC7t tr\u1EA3m: Song \u0111ao - M\xE3n nguy\u1EC7t tr\u1EA3m: Yena gh\xE9p c\u1EB7p v\u0169 kh\xED th\xE0nh Vi\xEAn \u0111ao, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn c\xE1c k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, \u0111\u1ED3ng th\u1EDDi t\u0103ng c\xF4ng v\u1EADt l\xFD\xA0li\xEAn t\u1EE5c. Sau khi k\xEDch ho\u1EA1t, Yena chuy\u1EC3n 3 chi\xEAu hi\u1EC7n t\u1EA1i th\xE0nh b\u1ED9 chi\xEAu m\u1EDBi s\u1EED d\u1EE5ng Nguy\u1EC7t \u0111ao.Nguy\u1EC7t \u0111ao - Ho\xE0nh nguy\u1EC7t tr\u1EA3m: Yena t\xE1ch v\u0169 kh\xED th\xE0nh c\u1EB7p Loan \u0111ao ch\xE9m ngang b\u1ED1n ph\xEDa, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn c\xE1c n\u1EA1n nh\xE2n l\xE2n c\u1EADn, \u0111\u1ED3ng th\u1EDDi t\u1EF1\xA0t\u0103ng t\u1ED1c \u0111\xE1nh li\xEAn t\u1EE5c 5 gi\xE2y. Sau khi k\xEDch ho\u1EA1t, Yena chuy\u1EC3n 3 chi\xEAu hi\u1EC7n t\u1EA1i th\xE0nh b\u1ED9 chi\xEAu m\u1EDBi s\u1EED d\u1EE5ng Song \u0111ao."
    },
    meta_data: {
      win_rate: 49.39,
      pick_rate: 7.17,
      ban_rate: 0.03
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_112",
    name: "Yorn",
    role: [
      "X\u1EA1 th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/112_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'V\xF4 t\u1EADn t\xEAn: "N\u1ED9i t\u1EA1i: Sau khi d\xF9ng chi\xEAu, ho\u1EB7c \u0111\xE1nh th\u01B0\u1EDDng 5 l\u1EA7n, Yorn\xA0b\u1EAFn ra 7 m\u0169i t\xEAn t\u1EA7m xa c\xF4ng k\xEDch k\u1EBB \u0111\u1ECBch tr\u01B0\u1EDBc m\u1EB7t\xA0g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0v\xE0 1% m\xE1u t\u1ED1i \u0111a k\u1EBB \u0111\u1ECBch\xA0s\xE1t th\u01B0\u01A1ng chu\u1EA9n\xA0m\u1ED7i \u0111\u1EE3t. L\xEDnh, qu\xE1i v\xE0 tr\u1EE5 nh\u1EADn nhi\u1EC1u s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD h\u01A1n.Sau khi d\xF9ng chi\xEAu, Yorn\xA0t\u0103ng 30% t\u1ED1c ch\u1EA1y trong 0.5 gi\xE2y"',
      s1: "T\xEAn n\u1ED5: Yorn b\u1EAFn m\u1ED9t m\u0169i t\xEAn n\u1ED5 \u0111\u1EBFn v\xF9ng ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD \u0111\u1ED3ng th\u1EDDi khi\u1EBFn n\u1EA1n nh\xE2n b\u1ECB cho\xE1ng.",
      s2: "M\u01B0a t\xEAn: Yorn tri\u1EC7u h\u1ED3i m\u1ED9t v\xF9ng \u0111\u1EB7c bi\u1EC7t li\xEAn t\u1EE5c b\u1EAFn ph\xE1 k\u1EBB \u0111\u1ECBch b\xEAn trong, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. \u0110\xF2n \u0111\xE1nh ti\u1EBFp theo k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i V\xF4 t\u1EADn t\xEAn.",
      s3: 'T\xEAn th\u1EA7n: "Yorn b\u1EAFn m\u1ED9t m\u0169i t\xEAn c\u01B0\u1EDDng h\xF3a \u0111\u1EBFn m\u1ED9t m\u1EE5c ti\xEAu g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD\xA0l\xEAn t\u01B0\u1EDBng \u0111\u1ECBch \u0111\u1EA7u ti\xEAn tr\xFAng ph\u1EA3i, k\xE8m theo l\u01B0\u1EE3ng m\xE1u \u0111\xE3 m\u1EA5t c\u1EE7a m\u1EE5c ti\xEAu th\xE0nh\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p thu\u1EADt (t\u1ED1i \u0111a 1000 s\xE1t th\u01B0\u01A1ng l\xEAn qu\xE1i).\u0110\xF2n \u0111\xE1nh sau \u0111\xF3 k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i V\xF4 t\u1EADn t\xEAn."'
    },
    meta_data: {
      win_rate: 50.13,
      pick_rate: 11.46,
      ban_rate: 0.09
    },
    counters: [
      "Capheny",
      "Stuart",
      "Tel'Annas"
    ]
  },
  {
    id: "hero_545",
    name: "Yue",
    role: [
      "Ph\xE1p s\u01B0"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/545_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "V\u01B0\u01A1ng quy\u1EC1n: M\u1ED7i khi tung chi\xEAu 1, chi\xEAu 2 Yue s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c 1 c\u1ED9ng d\u1ED3n. Khi \u0111\u1EE7 2 c\u1ED9ng d\u1ED3n Yue s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a v\xE0 l\xE0m m\u1EDBi chi\xEAu 1, chi\xEAu 2.",
      s1: "C\u1EAFt giang s\u01A1n: Tung ra 2 ng\u1ECDc phi\u1EBFn bay theo qu\u1EF9 \u0111\u1EA1o giao nhau v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng. K\u1EBB \u0111\u1ECBch s\u1EBD ch\u1ECBu g\u1EA5p \u0111\xF4i n\u1EBFu trung \u0111\xF2n t\u1EA1i giao \u0111i\u1EC3m. C\u01B0\u1EDDng h\xF3a chi\xEAu s\u1EBD t\u0103ng nhi\u1EC1u s\xE1t th\u01B0\u01A1ng.",
      s2: "Tr\u1EA3m thi\xEAn \u0111\u1ECBa: Tung ra 2 ng\u1ECDc phi\u1EBFn bay theo qu\u1EF9 \u0111\u1EA1o giao nhau v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng. K\u1EBB \u0111\u1ECBch s\u1EBD ch\u1ECBu g\u1EA5p \u0111\xF4i n\u1EBFu trung \u0111\xF2n t\u1EA1i giao \u0111i\u1EC3m. C\u01B0\u1EDDng h\xF3a chi\xEAu s\u1EBD t\u0103ng nhi\u1EC1u s\xE1t th\u01B0\u01A1ng.",
      s3: "\u0110\u1EA1o qu\xE2n v\u01B0\u01A1ng: G\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc m\u1EB7t v\xE0 \u0111\u1EA9y l\xF9i ch\xFAng. B\u1EA3n th\xE2n s\u1EBD nh\u1EA3y v\u1EC1 sau m\u1ED9t kho\u1EA3ng c\xE1ch v\xE0 t\u0103ng t\u1EA7m nh\xECn."
    },
    meta_data: {
      win_rate: 48.24,
      pick_rate: 8.08,
      ban_rate: 0.54
    },
    counters: [
      "Lauriel",
      "Diaochan",
      "D'Arcy"
    ]
  },
  {
    id: "hero_129",
    name: "Zanis",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/129_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'Long t\u01B0\u1EDBng: "N\u1ED9i t\u1EA1i: M\u1ED7i \u0111i\u1EC3m h\u1EA1 ho\u1EB7c ph\u1EE5 t\u0103ng cho Tri\u1EC7u V\xE2n m\u1ED9t \xEDt c\xF4ng v\u1EADt l\xFD. C\u1ED9ng d\u1ED3n 20 l\u1EA7n.M\u1ED7i m\u1ED9t \u0111i\u1EC3m h\u1EA1 ho\u1EB7c ph\u1EE5 h\u1ED3i cho Tri\u1EC7u V\xE2n 5% m\xE1u t\u1ED1i \u0111a"',
      s1: "Long huy\u1EBFt: Tri\u1EC7u V\xE2n c\u01B0\u1EDDng h\xF3a b\u1EA3n th\xE2n gi\xFAp lo\u1EA1i b\u1ECF m\u1ECDi tr\u1EA1ng th\xE1i b\u1EA5t l\u1EE3i \u0111ang g\xE1nh ch\u1ECBu,\xA0\u0111\u1ED3ng th\u1EDDi t\u0103ng 80% t\u1ED1c ch\u1EA1y trong th\u1EDDi gian ng\u1EAFn. \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp s\u1EBD \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a, g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn,\xA0khi\u1EBFn ch\xFAng b\u1ECB l\xE0m ch\u1EADm 50% t\u1ED1c ch\u1EA1y trong th\u1EDDi gian ng\u1EAFn.",
      s2: "Long H\u1ED1ng: Tri\u1EC7u V\xE2n qu\xE9t th\u01B0\u01A1ng, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, \u0111\u1ED3ng th\u1EDDi gi\xFAp h\u1EAFn t\u0103ng t\u1ED1c \u0111\xE1nh v\xE0 h\xFAt m\xE1u.",
      s3: 'Long k\xEDch: "Tri\u1EC7u V\xE2n n\u1EC7n th\u01B0\u01A1ng l\xEAn m\u1EE5c ti\xEAu, g\xE2y s\xE1t th\u01B0\u01A1ng chu\u1EA9n\xA0k\xE8m hi\u1EC7u \u1EE9ng h\u1EA5t v\u0103ng tho\xE1ng ch\u1ED1c.Ngo\xE0i ra Tri\u1EC7u V\xE2n c\xF2n nh\u1EADn mi\u1EC5n th\u01B0\u01A1ng, \u0111\u1EB7c bi\u1EC7t c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng chu\u1EA9n.Hi\u1EC7u \u1EE9ng k\xE9o d\xE0i 5 gi\xE2y."'
    },
    meta_data: {
      win_rate: 48.25,
      pick_rate: 16.11,
      ban_rate: 0.09
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_513",
    name: "Zata",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/513_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "Phong s\xE1t: N\u1ED9i t\u1EA1i Phong s\xE1t g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn m\u1EE5c ti\xEAu gi\xFAp Zata gi\u1EA3m h\u1ED3i chi\xEAu cu\u1ED1i.",
      s1: "\u01AFng g\xE0o: Zata b\u1EAFn ra m\u1ED9t phi \u0111\u1EA1n gi\u1EA3m d\u1EA7n t\u1ED1c \u0111\u1ED9, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p. N\u1EBFu bay \u0111\u1EBFn v\u1ECB tr\xED xa nh\u1EA5t, phi \u0111\u1EA1n s\u1EBD n\u1ED5 tung g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p thu\u1EADt l\u1EA7n n\u1EEFa.",
      s2: "V\xF2i r\u1ED3ng: Zata t\u1EA1o m\u1ED9t c\u01A1n l\u1ED1c t\u1EA1i \u0111i\u1EC3m ch\u1EC9 \u0111\u1ECBnh g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p v\xE0 l\xE0m ch\u1EADm \u0111\u1ECBch. C\u01A1n l\u1ED1c sau khi sinh ra s\u1EBD quay v\u1EC1 v\u1ECB tr\xED Zata \u0111ang \u0111\u1EE9ng \u1EDF th\u1EDDi \u0111i\u1EC3m tung chi\xEAu.",
      s3: "Thi\xEAn d\u1EF1c: Zata l\u01B0\u1EDBt v\u1EC1 ph\xEDa tr\u01B0\u1EDBc g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng l\u01B0\u1EDBt. N\u1EBFu trong qu\xE1 tr\xECnh l\u01B0\u1EDBt g\u1EB7p ph\u1EA3i c\xE1c chi\xEAu kh\xE1c c\u1EE7a b\u1EA3n th\xE2n ho\u1EB7c k\u1EBB \u0111\u1ECBch, trong 3 gi\xE2y k\u1EBF Zata s\u1EBD \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng n\xFAt di chuy\u1EC3n \u0111\u1EC3 ti\u1EBFn h\xE0nh xung k\xEDch. N\u1EBFu Zata ho\xE0n t\u1EA5t \u0111\u1EE7 3 l\u1EA7n xung k\xEDch, h\u1EAFn s\u1EBD k\xEDch ho\u1EA1t n\u1ED9i t\u1EA1i, kh\xF4ng b\u1ECB ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu v\xE0 g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p li\xEAn t\u1EE5c l\xEAn t\u01B0\u1EDBng \u0111\u1ECBch \u1EDF g\u1EA7n."
    },
    meta_data: {
      win_rate: 48.65,
      pick_rate: 5.53,
      ban_rate: 0.25
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_107",
    name: "Zephys",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/HeroHeadPath/301070_B37.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "B\u1EC1n b\u1EC9: N\u1ED9i t\u1EA1i: M\u1ED7i 3% m\xE1u t\u1ED1i \u0111a t\u1ED5n th\u1EA5t k\xEDch ho\u1EA1t 1% mi\u1EC5n nhi\u1EC5m s\xE1t th\u01B0\u01A1ng",
      s1: '\u0110\xE2m lao: "Zephys nh\xE0o t\u1EDBi nh\u1EEFng k\u1EBB th\xF9 theo m\u1ED9t \u0111\u01B0\u1EDDng th\u1EB3ng, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD.\u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng ti\u1EBFp theo g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y k\u1EBB \u0111\u1ECBch."',
      s2: "Li\xEAn k\xEDch: Zephys \u0111\xE1nh 4 l\u1EA7n c\xE1c k\u1EBB \u0111\u1ECBch ph\xEDa tr\u01B0\u1EDBc, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD. Khi tr\xFAng \u0111\u1ECBch s\u1EBD h\u1ED3i m\xE1u cho b\u1EA3n th\xE2n.",
      s3: 'Kh\xF4ng k\xEDch: "Zephys \u0111\u1ED9t k\xEDch k\u1EBB \u0111\u1ECBch t\u1EEB tr\xEAn kh\xF4ng, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 h\u1EA5t v\u0103ng c\xE1c m\u1EE5c ti\xEAu trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng.Ngo\xE0i ra Kh\xF4ng k\xEDch c\xF2n g\xE2y hi\u1EC7u \u1EE9ng R\u1EC1n vang l\xEAn c\xE1c n\u1EA1n nh\xE2n tr\xFAng chi\xEAu, khi\u1EBFn c\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng ho\u1EB7c chi\xEAu th\u1EE9c c\u1EE7a Zephys g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p."'
    },
    meta_data: {
      win_rate: 51.58,
      pick_rate: 7.94,
      ban_rate: 0.01
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  },
  {
    id: "hero_146",
    name: "Zill",
    role: [
      "S\xE1t th\u1EE7"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/146_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'B\xE3o T\u1ED1: "N\u1ED9i t\u1EA1i: C\xE1c chi\xEAu th\u1EE9c tr\xFAng \u0111\xEDch c\u1EE7a Zill khi\u1EBFn m\u1EE5c ti\xEAu ph\u1EA3i ch\u1ECBu th\xEAm d\u1EA5u \u1EA5n Gi\xF4ng t\u1ED1. Khi \u0111\u1EA1t \u0111\u1EE7 3 c\u1ED9ng d\u1ED3n, d\u1EA5u \u1EA5n ti\u1EBFn h\xF3a th\xE0nh b\xE3o t\u1ED1 k\xE9o d\xE0i 5 gi\xE2y \u0111\u1ED3ng th\u1EDDi gi\u1EA3m t\u1ED1c ch\u1EA1y c\u1EE7a m\u1EE5c ti\xEAu. C\xE1c \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Zill l\xEAn n\u1EA1n nh\xE2n \u0111ang ch\u1ECBu \u1EA5n b\xE3o t\u1ED1 s\u1EBD l\u1EADp t\u1EE9c ho\xE0n t\u1EA5t h\u1ED3i chi\xEAu c\u1EE7a Phong \u0111\u1ED9n, v\xE0 g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p.\u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng c\u1EE7a Zill g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng ph\xE9p (g\u1EA5p \u0111\xF4i ST l\xEAn qu\xE1i v\xE0 l\xEDnh)."',
      s1: "Phong \u0110ao: Zill n\xE9m c\u1EB7p song \u0111ao g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch tr\xFAng ph\u1EA3i tr\xEAn \u0111\u01B0\u1EDDng bay \u0111i, v\xE0 l\xE0m ch\u1EADm t\u1ED1c ch\u1EA1y c\u1EE7a ch\xFAng. Sau \u0111\xF3 l\u01B0\u1EE1i li\u1EC1m quay ng\u01B0\u1EE3c l\u1EA1i, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn nh\u1EEFng n\u1EA1n nh\xE2n tr\xFAng chi\xEAu tr\xEAn \u0111\u01B0\u1EDDng bay v\u1EC1.",
      s2: "Phong \u0110\u1ED9n: Zill d\u1ECBch chuy\u1EC3n \u0111\u1EBFn \u0111i\u1EC3m \u0111\xE3 ch\u1ECDn, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn t\u1EA5t c\u1EA3 k\u1EBB \u0111\u1ECBch quanh v\xF9ng \u1EA3nh h\u01B0\u1EDFng.",
      s3: "Phong Ba: Zill h\xF3a th\xE2n th\xE0nh m\u1ED9t lu\u1ED3ng phong ba b\xE3o t\u1ED1, t\u1EA5n c\xF4ng li\xEAn t\u1EE5c 5 l\u1EA7n l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn, g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p m\u1ED7i \u0111\u1EE3t. K\u1EBB \u0111\u1ECBch tr\xFAng nhi\u1EC1u \u0111\xF2n s\u1EBD ch\u1EC9 ph\u1EA3i ch\u1ECBu \xEDt s\xE1t th\u01B0\u01A1ng h\u01A1n t\u1EEB \u0111\xF2n th\u1EE9 hai tr\u1EDF \u0111i. Su\u1ED1t kho\u1EA3ng th\u1EDDi gian n\xE0y Zill kh\xF4ng th\u1EC3 b\u1ECB c\xF4ng k\xEDch ho\u1EB7c ch\u1ECDn l\xE0m m\u1EE5c ti\xEAu. \u0110\xF2n ch\xE9m \u0111\u1EA7u ti\xEAn lu\xF4n g\xE2y c\xE2m l\u1EB7ng 1 gi\xE2y."
    },
    meta_data: {
      win_rate: 47.82,
      pick_rate: 3.6,
      ban_rate: 0.01
    },
    counters: [
      "Enzo",
      "Aoi",
      "Wukong"
    ]
  },
  {
    id: "hero_525",
    name: "Zip",
    role: [
      "H\u1ED7 tr\u1EE3"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/525_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: "B\xC9O \u0110\xD4 \u0110\xD4: Zip bi\u1EBFn l\u1EDBn v\xE0 \u0111\u01B0\u1EE3c t\u0103ng mi\u1EC5n th\u01B0\u01A1ng \u0111\u1ED3ng th\u1EDDi m\u1ED7i gi\xE2y g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn \u0111\u1ECBch trong ph\u1EA1m vi.",
      s1: "\xC1C H\u1EACN: Zip ni\u1EC7m ma ch\xFA, g\xE2y\xA0s\xE1t th\u01B0\u01A1ng ph\xE9p\xA0l\xEAn m\u1EE5c ti\xEAu v\xE0 l\xE0m cho\xE1ng m\u1EE5c ti\xEAu. Sau \u0111\xF3 ma ch\xFA ti\u1EBFp t\u1EE5c t\xECm v\xE0 kh\xF3a c\xE1c t\u01B0\u1EDBng \u0111\u1ECBch l\xE2n c\u1EADn. N\u1EBFu kh\xF4ng c\xF3 \u0111\u1ED1i t\u01B0\u1EE3ng g\u1EA7n \u0111\u1EA5y, m\u1EE5c ti\xEAu ch\xEDnh s\u1EBD b\u1ECB gi\u1EA3m t\u1ED1c ch\u1EA1y.",
      s2: "KH\xCD TH\xD4N: Zip h\xE1 to m\u1ED3m m\u1EDF ra kh\xF4ng gian th\u1EE9 nguy\xEAn. Sau 1 gi\xE2y h\xFAt \u0111\u1ED3ng \u0111\u1ED9i v\xE0 qu\xE1i r\u1EEBng l\xE2n c\u1EADn v\xE0o b\u1EE5ng trong 4 gi\xE2y. \u0110\u1ED3ng \u0111\u1ED9i trong ph\u1EA1m vi \u1EA3nh h\u01B0\u1EDFng \u0111\u01B0\u1EE3c nh\u1EADn\xA0l\xE1 ch\u1EAFn, mi\u1EC5n th\u01B0\u01A1ng c\xF2n Zip m\u1ED7i l\u1EA7n h\xFAt \u0111\u01B0\u1EE3c 1 m\u1EE5c ti\xEAu s\u1EBD \u0111\u01B0\u1EE3c h\u1ED3i\xA0m\xE1u. L\xFAc n\xE0y t\u1EA5t c\u1EA3 s\xE1t th\u01B0\u01A1ng Zip g\xE1nh ch\u1ECBu s\u1EBD truy\u1EC1n v\xE0o l\xE1 ch\u1EAFn c\u1EE7a \u0111\u1ED3ng \u0111\u1ED9i. Trong qu\xE1 tr\xECnh h\xFAt, Zip \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng ch\u1EBF v\xE0 li\xEAn t\u1EE5c g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn l\xEDnh \u0111\u1ECBch. N\u1EBFu ng\u1EEBng h\xFAt n\u1EEDa ch\u1EEBng s\u1EBD \u0111\u01B0\u1EE3c gi\u1EA3m ph\u1EA7n l\u1EDBn th\u1EDDi gian h\u1ED3i chi\xEAu n\xE0y.",
      s3: "L\u0102N LONG L\xD3C: Zip bi\u1EBFn th\xE0nh tr\xE1i c\u1EA7u th\u1ECBt, t\u0103ng t\u1ED1c di chuy\u1EC3n l\xEAn t\u1ED1i \u0111a v\xE0 \u0111\u01B0\u1EE3c mi\u1EC5n kh\u1ED1ng ch\u1EBF \u0111\u1ED3ng th\u1EDDi l\u0103n theo h\u01B0\u1EDBng ch\u1EC9 \u0111\u1ECBnh. Trong khi l\u0103n Zip g\xE2y s\xE1t th\u01B0\u01A1ng ph\xE9p l\xEAn k\u1EBB \u0111\u1ECBch tr\xEAn \u0111\u01B0\u1EDDng l\u0103n v\xE0 h\u1EA5t tung. Khi k\u1EBFt th\xFAc gi\u1EA3m t\u1ED1c ch\u1EA1y c\u1EE7a \u0111\u1ECBch xung quanh. N\u1EBFu l\u0103n tr\xFAng v\xE1ch c\u1EA3n s\u1EBD l\u0103n ng\u01B0\u1EE3c l\u1EA1i v\xE0 t\u0103ng th\xEAm t\u1ED1c l\u0103n. K\xEDch ho\u1EA1t th\xEAm m\u1ED9t l\u1EA7n s\u1EBD khi\u1EBFn d\u1EEBng l\u0103n, th\u1EDDi gian h\u1ED3i chi\xEAu \u0111\u01B0\u1EE3c t\xEDnh theo th\u1EDDi gian \u0111\xE3 l\u0103n."
    },
    meta_data: {
      win_rate: 51.08,
      pick_rate: 2.18,
      ban_rate: 1.8
    },
    counters: [
      "Krizzix",
      "Ming",
      "Teemee"
    ]
  },
  {
    id: "hero_503",
    name: "Zuka",
    role: [
      "\u0110\u1EA5u s\u0129"
    ],
    avatar_img: "https://dl.ops.kgvn.garenanow.com/hok/client/web/H5itemicon/hero/120x120/503_120.jpg",
    stats: {
      sinh_menh: 0,
      sat_thuong: 0,
      hieu_ung: 0,
      do_kho: 0
    },
    skills: {
      passive: 'V\xF5 H\u1ED3n: "N\u1ED9i t\u1EA1i: M\u1ED7i 15 gi\xE2y khi g\xE2y s\xE1t th\u01B0\u01A1ng l\xEAn t\u01B0\u1EDBng \u0111\u1ECBch gi\xFAp k\xEDch ho\u1EA1t n\u1ED9i l\u1EF1cZuka, t\u0103ng th\xEAm c\xF4ng v\u1EADt l\xFD trong 1 th\u1EDDi gian."',
      s1: 'Lo\u1EA1n \u0110\u1EA3 B\u1ED5ng: "Zuka l\u01B0\u1EDBt t\u1EDBi tr\u01B0\u1EDBc vung g\u1EADy ph\u1EC9 th\xFAy t\u1EA5n c\xF4ng k\u1EBB \u0111\u1ECBch, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng n\u1EA1n nh\xE2n l\xE2n c\u1EADn. Chi\xEAu th\u1EE9c n\xE0y c\xF3 th\u1EC3 t\xE1i s\u1EED d\u1EE5ng trong v\xF2ng 5 gi\xE2y k\u1EBF, \u0111\u1ED3ng th\u1EDDi m\u1ED7il\u1EA7n tung chi\xEAu c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp c\u1EE7a Zuka gi\xFAp g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD v\xE0 gia t\u0103ng t\u1EA7m \u0111\xE1nh."',
      s2: "Phi Th\xE2n K\xEDch: Zuka l\u1ED9n nh\xE0o v\u1EC1 ph\xEDa tr\u01B0\u1EDBc, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng n\u1EA1n nh\xE2n tr\xFAng chi\xEAu d\u1ECDc \u0111\u01B0\u1EDDng bay. Tung chi\xEAu tr\xFAng \u0111\xEDch gi\xFAp Zuka nh\u1EADn\xA0l\xE1 ch\u1EAFn trong 2.5 gi\xE2y, \u0111\u1ED3ng th\u1EDDi c\u01B0\u1EDDng h\xF3a \u0111\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD (t\u0103ng theo c\u1EA5p t\u01B0\u1EDBng)\xA0v\xE0 h\u1EA5t tung c\xE1c k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn trong 0.5 gi\xE2y. Khi khi\xEAn v\u1EE1, Zuka \u0111\u01B0\u1EE3c h\u1ED3i\xA0m\xE1u m\u1ED7i gi\xE2y trong 3 gi\xE2y.",
      s3: "Tr\u1EA7m Tr\u1ECDng L\u1EF1c: Zuka ph\xF3ng v\xFAt l\xEAn kh\xF4ng r\u1ED3i n\u1EC7n xu\u1ED1ng m\u1EB7t \u0111\u1EA5t, g\xE2y s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn c\xE1c n\u1EA1n nh\xE2n trong v\xF9ng \u1EA3nh h\u01B0\u1EDFng, \u0111\u1ED3ng th\u1EDDi l\xE0m cho\xE1ng tr\xFAng trong 1 gi\xE2y. \u0110\xF2n \u0111\xE1nh th\u01B0\u1EDDng k\u1EBF ti\u1EBFp c\u1EE7a Zuka \u0111\u01B0\u1EE3c c\u01B0\u1EDDng h\xF3a, g\xE2y th\xEAm s\xE1t th\u01B0\u01A1ng v\u1EADt l\xFD l\xEAn nh\u1EEFng k\u1EBB \u0111\u1ECBch l\xE2n c\u1EADn."
    },
    meta_data: {
      win_rate: 49.05,
      pick_rate: 22.94,
      ban_rate: 0.16
    },
    counters: [
      "Edras",
      "Bijan",
      "Maloch"
    ]
  }
];

// src/logic/scoringEngine.ts
var heroes = heroes_data_default.map((h) => ({
  ...h,
  countered_by: [],
  synergies: []
}));
heroes.forEach((h) => {
  h.counters.forEach((targetName) => {
    const targetHero = heroes.find((other) => other.name === targetName);
    if (targetHero) {
      if (!targetHero.countered_by)
        targetHero.countered_by = [];
      if (!targetHero.countered_by.includes(h.name)) {
        targetHero.countered_by.push(h.name);
      }
    }
  });
});
heroes.forEach((h) => {
  const hRoles = h.role;
  if (hRoles.includes("H\u1ED7 tr\u1EE3") || hRoles.includes("\u0110\u1EE1 \u0111\xF2n")) {
    h.synergies = heroes.filter((other) => other.role.includes("X\u1EA1 th\u1EE7") || other.role.includes("Ph\xE1p s\u01B0")).map((o) => o.name);
  } else if (hRoles.includes("S\xE1t th\u1EE7")) {
    h.synergies = heroes.filter((other) => other.role.includes("H\u1ED7 tr\u1EE3") && other.name !== h.name).map((o) => o.name);
  }
});
var calculateRecommendations = /* @__PURE__ */ __name((teamBlueIds, teamRedIds, bannedIds) => {
  const teamBlue = teamBlueIds.map((id) => heroes.find((h) => h.id === id)).filter(Boolean);
  const teamRed = teamRedIds.map((id) => heroes.find((h) => h.id === id)).filter(Boolean);
  const unavailable = /* @__PURE__ */ new Set([...teamBlueIds, ...teamRedIds, ...bannedIds]);
  const availableHeroes = heroes.filter((h) => !unavailable.has(h.id));
  const blueRoles = teamBlue.flatMap((h) => h.role);
  const WEIGHTS = { P: 0.25, C: 0.35, S: 0.25, B: 0.15 };
  const recommendations = availableHeroes.map((hero) => {
    const reasons = [];
    const reliability = Math.min(1, hero.meta_data.pick_rate / 10);
    const wrBaseline = 50;
    const adjustedWRBonus = (hero.meta_data.win_rate - wrBaseline) * reliability;
    const prScore = Math.min(100, hero.meta_data.pick_rate * 4);
    const brScore = Math.min(100, hero.meta_data.ban_rate * 3);
    const powerBase = 50 + adjustedWRBonus * 8;
    const powerScore = powerBase * 0.4 + prScore * 0.3 + brScore * 0.3;
    if (hero.meta_data.ban_rate > 15)
      reasons.push(`T\u01B0\u1EDBng S-Tier (T\u1EC9 l\u1EC7 c\u1EA5m cao: ${hero.meta_data.ban_rate}%)`);
    if (hero.meta_data.pick_rate > 15)
      reasons.push("T\u01B0\u1EDBng Meta ph\u1ED5 bi\u1EBFn (\u0110\u1ED9 \u1ED5n \u0111\u1ECBnh cao)");
    let counterScore = 50;
    teamRed.forEach((enemy) => {
      const enemyPowerFactor = (enemy.meta_data.win_rate - 45) / 10;
      if (hero.counters.includes(enemy.name)) {
        const impact = 20 * Math.max(0.8, enemyPowerFactor);
        counterScore += impact;
        reasons.push(`Kh\u1EAFc ch\u1EBF: ${enemy.name} (Value: +${impact.toFixed(1)})`);
      }
      if (hero.countered_by?.includes(enemy.name)) {
        counterScore -= 25;
      }
    });
    let synergyScore = 50;
    const essentialRoles = ["X\u1EA1 th\u1EE7", "Ph\xE1p s\u01B0", "H\u1ED7 tr\u1EE3", "\u0110\u1EE1 \u0111\xF2n", "S\xE1t th\u1EE7"];
    hero.role.forEach((r) => {
      const countInTeam = blueRoles.filter((role) => role === r).length;
      if (countInTeam === 0) {
        synergyScore += 25;
        if (essentialRoles.includes(r))
          reasons.push(`B\u1ED5 sung v\u1ECB tr\xED c\xF2n thi\u1EBFu: ${r}`);
      } else {
        synergyScore -= countInTeam * 35;
        if (countInTeam >= 1)
          reasons.push(`C\u1EA3nh b\xE1o: \u0110\u1ED9i \u0111\xE3 c\xF3 ${countInTeam} ${r}`);
      }
    });
    const syncMates = teamBlue.filter((mate) => hero.synergies?.includes(mate.name));
    if (syncMates.length > 0) {
      synergyScore += 15;
      reasons.push(`Ph\u1ED1i h\u1EE3p t\u1ED1t v\u1EDBi: ${syncMates[0].name}`);
    }
    let balanceScore = 50;
    const hasFrontline = blueRoles.some((r) => r === "\u0110\u1EE1 \u0111\xF2n" || r === "\u0110\u1EA5u s\u0129");
    const hasMagicDamage = blueRoles.some((r) => r === "Ph\xE1p s\u01B0");
    const hasPhysicalDamage = blueRoles.some((r) => r === "X\u1EA1 th\u1EE7" || r === "S\xE1t th\u1EE7");
    if (!hasFrontline && (hero.role.includes("\u0110\u1EE1 \u0111\xF2n") || hero.role.includes("\u0110\u1EA5u s\u0129"))) {
      balanceScore += 25;
      reasons.push("C\u1EA7n th\xEAm d\xE0n ch\u1EAFn (Frontline)");
    }
    if (!hasMagicDamage && hero.role.includes("Ph\xE1p s\u01B0")) {
      balanceScore += 20;
      reasons.push("C\u1EA7n th\xEAm s\xE1t th\u01B0\u01A1ng Ph\xE9p");
    }
    if (!hasPhysicalDamage && (hero.role.includes("X\u1EA1 th\u1EE7") || hero.role.includes("S\xE1t th\u1EE7"))) {
      balanceScore += 20;
    }
    const totalScore = powerScore * WEIGHTS.P + counterScore * WEIGHTS.C + synergyScore * WEIGHTS.S + balanceScore * WEIGHTS.B;
    return {
      hero,
      score: totalScore,
      reasons: Array.from(new Set(reasons)),
      breakdown: {
        power: powerScore,
        counter: counterScore,
        synergy: synergyScore,
        balance: balanceScore
      }
    };
  });
  return recommendations.sort((a, b) => b.score - a.score);
}, "calculateRecommendations");
var getMissingRoles = /* @__PURE__ */ __name((teamBlueIds) => {
  const teamBlue = teamBlueIds.map((id) => heroes.find((h) => h.id === id)).filter(Boolean);
  const rolesPresent = teamBlue.flatMap((h) => h.role);
  const missing = [];
  if (!rolesPresent.includes("Ph\xE1p s\u01B0"))
    missing.push("Ph\xE1p s\u01B0 (Mid)");
  if (!rolesPresent.includes("X\u1EA1 th\u1EE7"))
    missing.push("X\u1EA1 th\u1EE7 (AD)");
  if (!rolesPresent.includes("S\xE1t th\u1EE7") && !rolesPresent.some((r) => r === "\u0110\u1EA5u s\u0129"))
    missing.push("S\xE1t th\u1EE7/S\xE1t th\u01B0\u01A1ng (R\u1EEBng)");
  if (!rolesPresent.includes("H\u1ED7 tr\u1EE3") && !rolesPresent.includes("\u0110\u1EE1 \u0111\xF2n"))
    missing.push("Tr\u1EE3 th\u1EE7/\u0110\u1EE1 \u0111\xF2n (Support)");
  if (teamBlue.length < 5 && !rolesPresent.includes("\u0110\u1EA5u s\u0129"))
    missing.push("\u0110\u1EA5u s\u0129 (\u0110\u01B0\u1EDDng T\xE0 th\u1EA7n)");
  return missing;
}, "getMissingRoles");
var getDetailedMatchupWeights = /* @__PURE__ */ __name((teamBlueIds, teamRedIds) => {
  const teamBlue = teamBlueIds.map((id) => heroes.find((h) => h.id === id)).filter(Boolean);
  const teamRed = teamRedIds.map((id) => heroes.find((h) => h.id === id)).filter(Boolean);
  const getWeights = /* @__PURE__ */ __name((team, enemies) => {
    return team.map((hero) => {
      const reliability = Math.min(1, hero.meta_data.pick_rate / 10);
      const basePower = (hero.meta_data.win_rate - 45) * 10 * reliability;
      let counterScore = 0;
      enemies.forEach((enemy) => {
        if (hero.counters.includes(enemy.name))
          counterScore += 25;
        if (hero.countered_by?.includes(enemy.name))
          counterScore -= 25;
      });
      let synergyScore = 0;
      team.forEach((mate) => {
        if (mate.id !== hero.id && hero.synergies?.includes(mate.name))
          synergyScore += 15;
      });
      return {
        id: hero.id,
        name: hero.name,
        base_power: Math.round(basePower),
        counter_advantage: counterScore,
        synergy_impact: synergyScore,
        roles: hero.role,
        meta_data: hero.meta_data,
        stats: hero.stats
      };
    });
  }, "getWeights");
  return {
    blue: getWeights(teamBlue, teamRed),
    red: getWeights(teamRed, teamBlue),
    missing_roles_blue: getMissingRoles(teamBlueIds)
  };
}, "getDetailedMatchupWeights");

// src/index.ts
var getTacticalTags = /* @__PURE__ */ __name((hero) => {
  const tags = [];
  const text = (hero.name + " " + hero.skills.passive + " " + hero.skills.s1 + " " + hero.skills.s2 + " " + hero.skills.s3).toLowerCase();
  if (text.includes("l\xE0m cho\xE1ng") || text.includes("h\u1EA5t tung") || text.includes("\xE1p ch\u1EBF"))
    tags.push("Kh\u1ED1ng ch\u1EBF c\u1EE9ng");
  if (text.includes("l\xE0m ch\u1EADm") || text.includes("c\xE2m l\u1EB7ng"))
    tags.push("Kh\u1ED1ng ch\u1EBF m\u1EC1m");
  if (text.includes("s\xE1t th\u01B0\u01A1ng chu\u1EA9n"))
    tags.push("S\xE1t th\u01B0\u01A1ng chu\u1EA9n");
  if (text.includes("h\u1ED3i m\xE1u") || text.includes("h\u1ED3i ph\u1EE5c"))
    tags.push("H\u1ED3i ph\u1EE5c");
  if (text.includes("l\xE1 ch\u1EAFn") || text.includes("gi\xE1p"))
    tags.push("Gi\xE1p/Khi\xEAn");
  if (text.includes("l\u01B0\u1EDBt") || text.includes("t\u1ED1c ch\u1EA1y"))
    tags.push("C\u01A1 \u0111\u1ED9ng");
  if (text.includes("mi\u1EC5n kh\u1ED1ng") || text.includes("mi\u1EC5n th\u01B0\u01A1ng"))
    tags.push("Mi\u1EC5n kh\u1ED1ng/th\u01B0\u01A1ng");
  if (text.includes("xuy\xEAn gi\xE1p") || text.includes("m\xE1u t\u1ED1i \u0111a"))
    tags.push("Di\u1EC7t Tank");
  return tags;
}, "getTacticalTags");
var getCorsHeaders = /* @__PURE__ */ __name((request) => {
  const origin = request.headers.get("Origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400"
  };
}, "getCorsHeaders");
var src_default = {
  async fetch(request, env, ctx) {
    const corsHeaders = getCorsHeaders(request);
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders
      });
    }
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders
      });
    }
    try {
      const { teamBlue, teamRed, banned, includeAI } = await request.json();
      const allRecs = calculateRecommendations(teamBlue, teamRed, banned);
      const top6 = allRecs.slice(0, 6);
      const top24 = allRecs.slice(0, 24);
      const isFinal = teamBlue.length === 5 && teamRed.length === 5;
      const missingRoles = getMissingRoles(teamBlue);
      let aiResponseData = { recommendations: top6, aiAdvice: {}, isFinal };
      if (includeAI && env.GEMINI_API_KEY) {
        try {
          const allyInfo = teamBlue.map((id) => {
            const h = heroes.find((x) => x.id === id);
            return h ? `${h.name} (${h.role.join("/")})` : id;
          }).join(", ");
          const enemyInfo = teamRed.map((id) => {
            const h = heroes.find((x) => x.id === id);
            return h ? `${h.name} (${h.role.join("/")}) [Tags: ${getTacticalTags(h).join(", ")}]` : id;
          }).join(", ");
          let prompt = "";
          if (isFinal) {
            const weights = getDetailedMatchupWeights(teamBlue, teamRed);
            prompt = `B\u1EA1n l\xE0 m\u1ED9t Chuy\xEAn gia ph\xE2n t\xEDch d\u1EEF li\u1EC7u Esports kh\xE1ch quan, chuy\xEAn s\xE2u v\u1EC1 Li\xEAn Qu\xE2n Mobile.
                      TR\u1EACN \u0110\u1EA4U \u0110\xC3 CH\u1ED0T \u0110\u1ED8I H\xCCNH. H\xE3y cung c\u1EA5p m\u1ED9t b\u1EA3n ph\xE2n t\xEDch Tr\u1EADn \u0111\u1EA5u (Match Forecast) trung l\u1EADp v\xE0 ch\xEDnh x\xE1c cao b\u1EB1ng Giao th\u1EE9c NWRP V2.

                      C\xD4NG TH\u1EE8C NWRP V2 (Neural Win-Rate Protocol):
                      WinRate = (\u03A3Power_Base * 0.25) + (\u03A3Matchup_Diff * 0.35) + (\u03A3Synergy_Impact * 0.25) + (Meta_Balance * 0.15)
                      *Trong \u0111\xF3:*
                      - Power_Base: D\u1EF1a tr\xEAn win_rate, pick_rate v\xE0 stats c\u01A1 b\u1EA3n.
                      - Matchup_Diff: D\u1EF1a tr\xEAn counter_advantage (\u0111\u01B0a v\xE0o win_rate \u0111\u1EC3 chu\u1EA9n h\xF3a).
                      - Synergy_Impact: D\u1EF1a tr\xEAn s\u1EF1 b\xF9 \u0111\u1EAFp vai tr\xF2 (missing roles) v\xE0 synergy_impact.

                      C\u01A0 S\u1EDE D\u1EEE LI\u1EC6U TH\u1EF0C T\u1EBE (Raw Parameters):
                      PHE BLUE (ALLY):
                      ${JSON.stringify(weights.blue, null, 2)}

                      PHE RED (ENEMY):
                      ${JSON.stringify(weights.red, null, 2)}

                      NHI\u1EC6M V\u1EE4 C\u1EE6A B\u1EA0N:
                      1. Th\u1EF1c hi\u1EC7n ph\xE9p t\xEDnh theo NWRP V2 d\u1EF1a tr\xEAn d\u1EEF li\u1EC7u th\xF4 \u1EDF tr\xEAn.
                      2. \u0110\xE1nh gi\xE1 kh\xE1ch quan c\xE1n c\xE2n s\u1EE9c m\u1EA1nh (Probability Balance %) cho ph\xED Blue.
                      3. Vi\u1EBFt Summary (t\u1ED1i \u0111a 60 ch\u1EEF) ch\u1EC9 ra tham s\u1ED1 n\xE0o \u1EA3nh h\u01B0\u1EDFng nh\u1EA5t \u0111\u1EBFn con s\u1ED1 cu\u1ED1i c\xF9ng (Vd: "T\u1EF7 l\u1EC7 th\u1EAFng cao h\u01A1n 5% nh\u1EDD ch\u1EC9 s\u1ED1 Counter Advantage c\u1EE7a Hayate \u0111\u1ED1i v\u1EDBi Baldum...").
                      4. \u0110\u01B0a ra 2 Win Conditions cho Blue v\xE0 2 Win Conditions cho Red.
                      5. \u0110\u01B0a ra 2 Danger Alerts cho Blue (Threat mitigation).

                      Y\xCAU C\u1EA6U TR\u1EA2 V\u1EC0 JSON:
                      {
                        "forecast": {
                          "win_rate": 55,
                          "summary": "Ph\xE2n t\xEDch s\u1ED1 li\u1EC7u th\u1EF1c t\u1EBF theo NWRP V2...",
                          "win_conditions": ["Blue:...", "Blue:...", "Red:...", "Red:..."],
                          "danger_alerts": ["...", "..."]
                        }
                      }`;
          } else {
            const candidatePool = top24.map((r) => {
              const h = r.hero;
              return `- ${h.name} (ID: ${h.id}) [${h.role.join("/")}]: Tags: ${getTacticalTags(h).join(", ")}. Reasons: ${r.reasons.join(", ")}`;
            }).join("\n");
            prompt = `B\u1EA1n l\xE0 HLV Esports chuy\xEAn nghi\u1EC7p \u0111\u1EC9nh cao c\u1EE7a Li\xEAn Qu\xE2n Mobile (Arena of Valor). 
                        
                        PH\xC2N T\xCDCH \u0110\u1ED8I H\xCCNH:
                        - \u0110\u1ED3ng minh hi\u1EC7n t\u1EA1i: ${allyInfo || "Ch\u01B0a ch\u1ECDn"}.
                        - C\u1EA3nh b\xE1o thi\u1EBFu h\u1EE5t: ${missingRoles.length > 0 ? missingRoles.join(", ") : "\u0110\u1ED9i h\xECnh \u0111\xE3 c\xE2n b\u1EB1ng"}.
                        - \u0110\u1ED1i th\u1EE7 hi\u1EC7n t\u1EA1i: ${enemyInfo || "Ch\u01B0a ch\u1ECDn"}.
                        - T\u01B0\u1EDBng \u0111\xE3 b\u1ECB c\u1EA5m: ${banned.filter((id) => id !== "none").join(", ")}.

                        NHI\u1EC6M V\u1EE4 C\u1EE6A B\u1EA0N:
                        1. Ph\xE2n t\xEDch l\u1ED7 h\u1ED5ng \u0111\u1ED9i h\xECnh hi\u1EC7n t\u1EA1i v\xE0 \u0111e d\u1ECDa t\u1EEB phe \u0111\u1ECBch.
                        2. Ch\u1ECDn ra 3 "Neural Picks" t\u1EEB Danh s\xE1ch \u1EE9ng vi\xEAn b\xEAn d\u01B0\u1EDBi ho\u1EB7c d\u1EF1a tr\xEAn ki\u1EBFn th\u1EE9c c\u1EE7a b\u1EA1n v\u1EC1 meta. \u01AFu ti\xEAn l\u1EA5p \u0111\u1EA7y v\u1ECB tr\xED thi\u1EBFu h\u1EE5t.
                        3. \u0110\u01B0a ra l\u1EDDi khuy\xEAn v\u1EADn h\xE0nh cho c\xE1c t\u01B0\u1EDBng Key.

                        DANH S\xC1CH \u1EE8NG VI\xCAN TI\u1EC0M N\u0102NG (Top 24 c\u1EE7a h\u1EC7 th\u1ED1ng):
                        ${candidatePool}

                        Y\xCAU C\u1EA6U TR\u1EA2 V\u1EC0 JSON DUY NH\u1EA4T:
                        {
                          "summary": "Ph\xE2n t\xEDch chi\u1EBFn thu\u1EADt (t\u1ED1i \u0111a 60 ch\u1EEF)...",
                          "neural_picks": [
                            { "id": "hero_id", "name": "...", "reason": "T\u1EA1i sao ch\u1ECDn t\u01B0\u1EDBng n\xE0y \u0111\u1EC3 kh\u1EAFc ch\u1EBF/b\u1ED5 sung?" }
                          ],
                          "advice": { "hero_id": "M\u1EB9o ch\u01A1i..." }
                        }`;
          }
          const aiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key=${env.GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
          });
          if (aiResponse.ok) {
            const aiData = await aiResponse.json();
            const rawText = aiData.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
            const jsonMatch = rawText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);
              if (isFinal) {
                aiResponseData = {
                  isFinal: true,
                  forecast: parsed.forecast || {}
                };
              } else {
                aiResponseData = {
                  recommendations: top6,
                  missingRoles,
                  aiSummary: parsed.summary,
                  neuralPicks: parsed.neural_picks || [],
                  aiAdvice: parsed.advice || {}
                };
              }
            }
          }
        } catch (aiErr) {
          console.error("AI Error:", aiErr);
        }
      }
      return new Response(JSON.stringify(aiResponseData), {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    }
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-dUh0EX/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-dUh0EX/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
