"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[46],{60518:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>f});var r=e(86070),i=e(25710);const o={},s="mitmproxy",a={id:"mitmproxy",title:"mitmproxy",description:"install",source:"@site/notes/python/mitmproxy.md",sourceDirName:".",slug:"/mitmproxy",permalink:"/notes/python/mitmproxy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jupyter",permalink:"/notes/python/jupyter"},next:{title:"mongo",permalink:"/notes/python/mongo"}},u={},f=[{value:"install",id:"install",level:2},{value:"API",id:"api",level:2},{value:"example.py",id:"examplepy",level:2}];function c(t){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mitmproxy",children:"mitmproxy"}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pip install mitmproxy\n\n# Mac\nopen ~/.mitmproxy/\n\u5b89\u88c5 mitmproxy-ca.pem\n\u8bbe\u7f6e\u4fe1\u4efb\u8be5\u8bc1\u4e66\n\n# open mitm.it after set proxy\nmitmproxy --http2 --listen-host 0.0.0.0 --listen-port 8888 -s mitm_test.py\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# http.HTTPFlow \u5b9e\u4f8b flow\nflow.request.headers #\u83b7\u53d6\u6240\u6709\u5934\u4fe1\u606f\uff0c\u5305\u542bHost\u3001User-Agent\u3001Content-type\u7b49\u5b57\u6bb5\nflow.request.url #\u5b8c\u6574\u7684\u8bf7\u6c42\u5730\u5740\uff0c\u5305\u542b\u57df\u540d\u53ca\u8bf7\u6c42\u53c2\u6570\uff0c\u4f46\u662f\u4e0d\u5305\u542b\u653e\u5728body\u91cc\u9762\u7684\u8bf7\u6c42\u53c2\u6570\nflow.request.pretty_url #\u540cflow.request.url\u76ee\u524d\u6ca1\u770b\u51fa\u4ec0\u4e48\u5dee\u522b\nflow.request.host #\u57df\u540d\nflow.request.method #\u8bf7\u6c42\u65b9\u5f0f\u3002POST\u3001GET\u7b49\nflow.request.scheme #\u4ec0\u4e48\u8bf7\u6c42 \uff0c\u5982https\nflow.request.path # \u8bf7\u6c42\u7684\u8def\u5f84\uff0curl\u9664\u57df\u540d\u4e4b\u5916\u7684\u5185\u5bb9\nflow.request.get_text() #\u8bf7\u6c42\u4e2dbody\u5185\u5bb9\uff0c\u6709\u4e00\u4e9bhttp\u4f1a\u628a\u8bf7\u6c42\u53c2\u6570\u653e\u5728body\u91cc\u9762\uff0c\u90a3\u4e48\u53ef\u901a\u8fc7\u6b64\u65b9\u6cd5\u83b7\u53d6\uff0c\u8fd4\u56de\u5b57\u5178\u7c7b\u578b\nflow.request.query #\u8fd4\u56deMultiDictView\u7c7b\u578b\u7684\u6570\u636e\uff0curl\u76f4\u63a5\u5e26\u7684\u952e\u503c\u53c2\u6570\nflow.request.get_content()#bytes,\u7ed3\u679c\u5982flow.request.get_text()\nflow.request.raw_content #bytes,\u7ed3\u679c\u5982flow.request.get_content()\nflow.request.urlencoded_form #MultiDictView\uff0ccontent-type\uff1aapplication/x-www-form-urlencoded\u65f6\u7684\u8bf7\u6c42\u53c2\u6570\uff0c\u4e0d\u5305\u542burl\u76f4\u63a5\u5e26\u7684\u952e\u503c\u53c2\u6570\nflow.request.multipart_form #MultiDictView\uff0ccontent-type\uff1amultipart/form-data\n\u65f6\u7684\u8bf7\u6c42\u53c2\u6570\uff0c\u4e0d\u5305\u542burl\u76f4\u63a5\u5e26\u7684\u952e\u503c\u53c2\u6570\n\n\u4ee5\u4e0a\u5747\u4e3a\u83b7\u53d6request\u4fe1\u606f\u7684\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5\uff0c\u5bf9\u4e8eresponse\uff0c\u540c\u7406\nflow.response.status_code #\u72b6\u6001\u7801\nflow.response.text#\u8fd4\u56de\u5185\u5bb9\uff0c\u5df2\u89e3\u7801\nflow.response.content #\u8fd4\u56de\u5185\u5bb9\uff0c\u4e8c\u8fdb\u5236\nflow.response.setText()#\u4fee\u6539\u8fd4\u56de\u5185\u5bb9\uff0c\u4e0d\u9700\u8981\u8f6c\u7801\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examplepy",children:"example.py"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# example\ndef response(flow):\n    if "some url" in flow.request.url:\n        print("[*] Request: {}".format(flow.request.url))\n        print("[*] Response: {}".format(flow.response.text))\n'})}),"\n",(0,r.jsx)(n.h1,{id:"charles",children:"charles"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n\t"bytes"\n\t"encoding/binary"\n\t"fmt"\n\t"math/rand"\n\t"time"\n)\n\nconst (\n\trounds    = 12\n\troundKeys = 2 * (rounds + 1)\n)\n\nfunc main() {\n\trand.Seed(time.Now().UnixNano())\n\n\tname := "mac"\n\n\tfmt.Println("name:", name, "    key:", crack(name))\n}\n\nfunc crack(text string) string {\n\n\tname := []byte(text)\n\tlength := len(name) + 4\n\tpadded := ((-length) & (8 - 1)) + length\n\tbs := make([]byte, 4)\n\tbinary.BigEndian.PutUint32(bs, uint32(len(name)))\n\tbuff := bytes.Buffer{}\n\tbuff.Write(bs)\n\tbuff.Write(name)\n\n\tvar ckName int64 = 0x7a21c951691cd470\n\tvar ckKey int64 = -5408575981733630035\n\tck := newCkCipher(ckName)\n\toutBuff := bytes.Buffer{}\n\n\tfor i := 0; i < padded; i += 8 {\n\t\tbf := buff.Bytes()[i : i+8]\n\t\tbuf := bytes.NewBuffer(bf)\n\t\tvar nowVar int64\n\t\tif err := binary.Read(buf, binary.BigEndian, &nowVar); err != nil {\n\t\t\tpanic(err)\n\t\t}\n\n\t\tdd := ck.encrypt(nowVar)\n\n\t\toutBuff.WriteByte(byte(dd >> 56))\n\t\toutBuff.WriteByte(byte(dd >> 48))\n\t\toutBuff.WriteByte(byte(dd >> 40))\n\t\toutBuff.WriteByte(byte(dd >> 32))\n\t\toutBuff.WriteByte(byte(dd >> 24))\n\t\toutBuff.WriteByte(byte(dd >> 16))\n\t\toutBuff.WriteByte(byte(dd >> 8))\n\t\toutBuff.WriteByte(byte(dd))\n\n\t}\n\tvar n int32\n\tfor _, b := range outBuff.Bytes() {\n\t\tn = rotateLeft(n^int32(int8(b)), 0x3)\n\t}\n\tprefix := n ^ 0x54882f8a\n\tsuffix := rand.Int31()\n\tin := int64(prefix) << 32\n\ts := int64(suffix)\n\tswitch suffix >> 16 {\n\tcase 0x0401:\n\tcase 0x0402:\n\tcase 0x0403:\n\t\tin |= s\n\t\tbreak\n\tdefault:\n\t\tin |= 0x01000000 | (s & 0xffffff)\n\t\tbreak\n\t}\n\n\tout := newCkCipher(ckKey).decrypt(in)\n\n\tvar n2 int64\n\tfor i := 56; i >= 0; i -= 8 {\n\t\tn2 ^= int64((uint64(in) >> i) & 0xff)\n\t}\n\n\tvv := int32(n2 & 0xff)\n\tif vv < 0 {\n\t\tvv = -vv\n\t}\n\treturn fmt.Sprintf("%02x%016x", vv, uint64(out))\n}\n\ntype ckCipher struct {\n\trk [roundKeys]int32\n}\n\nfunc newCkCipher(ckKey int64) ckCipher {\n\tck := ckCipher{}\n\n\tvar ld [2]int32\n\tld[0] = int32(ckKey)\n\tld[1] = int32(uint64(ckKey) >> 32)\n\n\tck.rk[0] = -1209970333\n\tfor i := 1; i < roundKeys; i++ {\n\t\tck.rk[i] = ck.rk[i-1] + -1640531527\n\t}\n\tvar a, b int32\n\tvar i, j int\n\n\tfor k := 0; k < 3*roundKeys; k++ {\n\t\tck.rk[i] = rotateLeft(ck.rk[i]+(a+b), 3)\n\t\ta = ck.rk[i]\n\t\tld[j] = rotateLeft(ld[j]+(a+b), a+b)\n\t\tb = ld[j]\n\t\ti = (i + 1) % roundKeys\n\t\tj = (j + 1) % 2\n\t}\n\treturn ck\n}\n\nfunc (ck ckCipher) encrypt(in int64) int64 {\n\ta := int32(in) + ck.rk[0]\n\tb := int32(uint64(in)>>32) + ck.rk[1]\n\tfor r := 1; r <= rounds; r++ {\n\t\ta = rotateLeft(a^b, b) + ck.rk[2*r]\n\t\tb = rotateLeft(b^a, a) + ck.rk[2*r+1]\n\t}\n\treturn pkLong(a, b)\n}\n\nfunc (ck ckCipher) decrypt(in int64) int64 {\n\ta := int32(in)\n\tb := int32(uint64(in) >> 32)\n\tfor i := rounds; i > 0; i-- {\n\t\tb = rotateRight(b-ck.rk[2*i+1], a) ^ a\n\t\ta = rotateRight(a-ck.rk[2*i], b) ^ b\n\t}\n\tb -= ck.rk[1]\n\ta -= ck.rk[0]\n\treturn pkLong(a, b)\n}\n\nfunc rotateLeft(x int32, y int32) int32 {\n\treturn int32(x<<(y&(32-1))) | int32(uint32(x)>>(32-(y&(32-1))))\n}\n\nfunc rotateRight(x int32, y int32) int32 {\n\treturn int32(uint32(x)>>(y&(32-1))) | int32(x<<(32-(y&(32-1))))\n}\n\nfunc pkLong(a int32, b int32) int64 {\n\treturn (int64(a) & 0xffffffff) | (int64(b) << 32)\n}\n'})})]})}function l(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},25710:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>a});var r=e(30758);const i={},o=r.createContext(i);function s(t){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(o.Provider,{value:n},t.children)}}}]);