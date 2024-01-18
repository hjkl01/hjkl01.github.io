import React, { useState } from "react";
import { Form, Input, Button, Typography, Table } from "antd";
import type { TableProps } from "antd";

import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface DataType {
  key: string;
  character: string;
  meaning: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "字符",
    dataIndex: "character",
    key: "character",
    width: "20%",
  },
  {
    title: "含义",
    dataIndex: "meaning",
    key: "meaning",
    width: "90%",
  },
];

const data: DataType[] = [
  {
    key: "1",
    character: "\\",
    meaning:
      '依照下列规则匹配：在非特殊字符之前的反斜杠表示下一个字符是特殊字符，不能按照字面理解。例如，前面没有"\\"的"b"通常匹配小写字母"b"，即字符会被作为字面理解，无论它出现在哪里。但如果前面加了"\\"，它将不再匹配任何字符，而是表示一个字符边界。在特殊字符之前的反斜杠表示下一个字符不是特殊字符，应该按照字面理解。详情请参阅下文中的"转义（Escaping）"部分。如果你想将字符串传递给RegExp构造函数，不要忘记在字符串字面量中反斜杠是转义字符。所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它。/[a-z]\\s/i和newRegExp("[a-z]\\\\s","i")创建了相同的正则表达式：一个用于搜索后面紧跟着空白字符（\\s可看后文）并且在a-z范围内的任意字符的表达式。为了通过字符串字面量给RegExp构造函数创建包含反斜杠的表达式，你需要在字符串级别和正则表达式级别都对它进行转义。例如/[a-z]:\\\\/i和newRegExp("[a-z]:\\\\\\\\","i")会创建相同的表达式，即匹配类似"C:\\"字符串。',
  },
  {
    key: "2",
    character: "^",
    meaning:
      "匹配输入的开始。如果多行标志被设置为true，那么也匹配换行符后紧跟的位置。例如，/^A/并不会匹配\"anA\"中的'A'，但是会匹配\"AnE\"中的'A'。当'^'作为第一个字符出现在一个字符集合模式时，它将会有不同的含义。反向字符集合一节有详细介绍和示例。",
  },
  {
    key: "3",
    character: "$",
    meaning:
      "匹配输入的结束。如果多行标志被设置为true，那么也匹配换行符前的位置。例如，/t$/并不会匹配\"eater\"中的't'，但是会匹配\"eat\"中的't'。",
  },
  {
    key: "4",
    character: "*",
    meaning:
      '匹配前一个表达式0次或多次。等价于{0,}。例如，/bo*/会匹配"Aghostboooooed"中的\'booooo\'和"Abirdwarbled"中的\'b\'，但是在"Agoatgrunted"中不会匹配任何内容。',
  },
  {
    key: "5",
    character: "+",
    meaning:
      '匹配前面一个表达式1次或者多次。等价于{1,}。例如，/a+/会匹配"candy"中的\'a\'和"caaaaaaandy"中所有的\'a\'，但是在"cndy"中不会匹配任何内容。',
  },
  {
    key: "6",
    character: "?",
    meaning:
      '匹配前面一个表达式0次或者1次。等价于{0,1}。例如，/e?le?/匹配"angel"中的\'el\'、"angle"中的\'le\'以及"oslo\'中的\'l\'。如果紧跟在任何量词*、+、?或{}的后面，将会使量词变为非贪婪（匹配尽量少的字符），和缺省使用的贪婪模式（匹配尽可能多的字符）正好相反。例如，对"123abc"使用/\\d+/将会匹配"123"，而使用/\\d+?/则只会匹配到"1"。还用于先行断言中，如本表的x(?=y)和x(?!y)条目所述。',
  },
  {
    key: "7",
    character: ".",
    meaning:
      "（小数点）默认匹配除换行符之外的任何单个字符。例如，/.n/将会匹配\"nay,anappleisonthetree\"中的'an'和'on'，但是不会匹配'nay'。如果s(\"dotAll\")标志位被设为true，它也会匹配换行符。",
  },
  {
    key: "8",
    character: "(x)",
    meaning:
      "像下面的例子展示的那样，它会匹配'x'并且记住匹配项。其中括号被称为捕获括号。模式/(foo)(bar)\\1\\2/中的'(foo)'和'(bar)'匹配并记住字符串\"foobarfoobar\"中前两个单词。模式中的\\1和\\2表示第一个和第二个被捕获括号匹配的子字符串，即foo和bar，匹配了原字符串中的后两个单词。注意\\1、\\2、...、\\n是用在正则表达式的匹配环节，详情可以参阅后文的\\n条目。而在正则表达式的替换环节，则要使用像$1、$2、...、$n这样的语法，例如，'barfoo'.replace(/(...)(...)/,'$2$1')。$&表示整个用于匹配的原字符串。",
  },
  {
    key: "9",
    character: "(?:x)",
    meaning:
      "匹配'x'但是不记住匹配项。这种括号叫作非捕获括号，使得你能够定义与正则表达式运算符一起使用的子表达式。看看这个例子/(?:foo){1,2}/。如果表达式是/foo{1,2}/，{1,2}将只应用于'foo'的最后一个字符'o'。如果使用非捕获括号，则{1,2}会应用于整个'foo'单词。更多信息，可以参阅下文的使用括号的子字符串匹配条目。",
  },
  {
    key: "10",
    character: "x(?=y)",
    meaning:
      "匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。例如，/Jack(?=Sprat)/会匹配到'Jack'仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅当它后面跟着'Sprat'或者是‘Frost’。但是‘Sprat’和‘Frost’都不是匹配结果的一部分。",
  },
  {
    key: "11",
    character: "(?<=y)x",
    meaning:
      "匹配'x'仅当'x'前面是'y'.这种叫做后行断言。例如，/(?<=Jack)Sprat/会匹配到'Sprat'仅仅当它前面是'Jack'。/(?<=Jack|Tom)Sprat/匹配‘Sprat’仅仅当它前面是'Jack'或者是‘Tom’。但是‘Jack’和‘Tom’都不是匹配结果的一部分。",
  },
  {
    key: "12",
    character: "x(?!y)",
    meaning:
      "仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找。例如，仅仅当这个数字后面没有跟小数点的时候，/\\d+(?!\\.)/匹配一个数字。正则表达式/\\d+(?!\\.)/.exec(\"3.141\")匹配‘141’而不是‘3.141’",
  },
  {
    key: "13",
    character: "(?<!y)x",
    meaning:
      "仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找。例如，仅仅当这个数字前面没有负号的时候，/(?<!-)\\d+/匹配一个数字。/(?<!-)\\d+/.exec('3')匹配到\"3\"./(?<!-)\\d+/.exec('-3')因为这个数字前有负号，所以没有匹配到。",
  },
  {
    key: "14",
    character: "x|y",
    meaning:
      "匹配‘x’或者‘y’。例如，/green|red/匹配“greenapple”中的‘green’和“redapple”中的‘red’",
  },
  {
    key: "15",
    character: "{n}",
    meaning:
      "n是一个正整数，匹配了前面一个字符刚好出现了n次。比如，/a{2}/不会匹配“candy”中的'a',但是会匹配“caandy”中所有的a，以及“caaandy”中的前两个'a'。",
  },
  {
    key: "16",
    character: "{n,}",
    meaning:
      'n是一个正整数，匹配前一个字符至少出现了n次。例如，/a{2,}/匹配"aa","aaaa"和"aaaaa"但是不匹配"a"。',
  },
  {
    key: "17",
    character: "{n,m}",
    meaning:
      "n和m都是整数。匹配前面的字符至少n次，最多m次。如果n或者m的值是0，这个值被忽略。例如，/a{1,3}/并不匹配“cndy”中的任意字符，匹配“candy”中的a，匹配“caandy”中的前两个a，也匹配“caaaaaaandy”中的前三个a。注意，当匹配”caaaaaaandy“时，匹配的值是“aaa”，即使原始的字符串中有更多的a。",
  },
  {
    key: "18",
    character: "[xyz]",
    meaning:
      '一个字符集合。匹配方括号中的任意字符，包括转义序列。你可以使用破折号（-）来指定一个字符范围。对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转义，不过转义也是起作用的。例如，[abcd]和[a-d]是一样的。他们都匹配"brisket"中的‘b’,也都匹配“city”中的‘c’。/[a-z.]+/和/[\\w.]+/与字符串“test.i.ng”匹配。',
  },
  {
    key: "19",
    character: "[^xyz]",
    meaning:
      '一个反向字符集。也就是说，它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。任何普通字符在这里都是起作用的。例如，[^abc]和[^a-c]是一样的。他们匹配"brisket"中的‘r’，也匹配“chop”中的‘h’。',
  },
  {
    key: "20",
    character: "[\\b]",
    meaning: "匹配一个退格(U+0008)。（不要和\\b混淆了。）",
  },
  {
    key: "21",
    character: "\\b",
    meaning:
      "匹配一个词的边界。一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者前面跟其他“字”字符的位置，例如在字母和空格之间。注意，匹配中不包括匹配的字边界。换句话说，一个匹配的词的边界的内容的长度是0。（不要和[\\b]混淆了）使用\"moon\"举例：/\\bm/匹配“moon”中的‘m’；/oo\\b/并不匹配\"moon\"中的'oo'，因为'oo'被一个“字”字符'n'紧跟着。/oon\\b/匹配\"moon\"中的'oon'，因为'oon'是这个字符串的结束部分。这样他没有被一个“字”字符紧跟着。/\\w\\b\\w/将不能匹配任何字符串，因为在一个单词中间的字符永远也不可能同时满足没有“字”字符跟随和有“字”字符跟随两种情况。备注：JavaScript的正则表达式引擎将特定的字符集定义为“字”字符。不在该集合中的任何字符都被认为是一个断词。这组字符相当有限：它只包括大写和小写的罗马字母，十进制数字和下划线字符。不幸的是，重要的字符，例如“é”或“ü”，被视为断词。",
  },
  {
    key: "22",
    character: "\\B",
    meaning:
      '匹配一个非单词边界。匹配如下几种情况：字符串第一个字符为非“字”字符字符串最后一个字符为非“字”字符两个单词字符之间两个非单词字符之间空字符串例如，/\\B../匹配"noonday"中的\'oo\',而/y\\B../匹配"possiblyyesterday"中的’yes‘',
  },
  {
    key: "23",
    character: "\\cX",
    meaning:
      "当X是处于A到Z之间的字符的时候，匹配字符串中的一个控制符。例如，/\\cM/匹配字符串中的control-M(U+000D)。",
  },
  {
    key: "24",
    character: "\\d",
    meaning:
      "匹配一个数字。等价于[0-9]。例如，/\\d/或者/[0-9]/匹配\"B2isthesuitenumber.\"中的'2'。",
  },
  {
    key: "25",
    character: "\\D",
    meaning:
      "匹配一个非数字字符。等价于[^0-9]。例如，/\\D/或者/[^0-9]/匹配\"B2isthesuitenumber.\"中的'B'。",
  },
  {
    key: "26",
    character: "\\f",
    meaning: "匹配一个换页符(U+000C)。",
  },
  {
    key: "27",
    character: "\\n",
    meaning: "匹配一个换行符(U+000A)。",
  },
  {
    key: "28",
    character: "\\r",
    meaning: "匹配一个回车符(U+000D)。",
  },
  {
    key: "29",
    character: "\\s",
    meaning:
      '匹配一个空白字符，包括空格、制表符、换页符和换行符。等价于[\\f\\n\\r\\t\\v\\u0020\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]。例如，/\\s\\w*/匹配"foobar."中的\'bar\'。经测试，\\s不匹配"\\u180e"，在当前版本Chrome(v80.0.3987.122)和Firefox(76.0.1)控制台输入/\\s/.test("\\u180e")均返回false。',
  },
  {
    key: "30",
    character: "\\S",
    meaning:
      "匹配一个非空白字符。等价于[^\\f\\n\\r\\t\\v\\u0020\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]。例如，/\\S\\w*/匹配\"foobar.\"中的'foo'。",
  },
  {
    key: "31",
    character: "\\t",
    meaning: "匹配一个水平制表符(U+0009)。",
  },
  {
    key: "32",
    character: "\\v",
    meaning: "匹配一个垂直制表符(U+000B)。",
  },
  {
    key: "33",
    character: "\\w",
    meaning:
      "匹配一个单字字符（字母、数字或者下划线）。等价于[A-Za-z0-9_]。例如，/\\w/匹配\"apple,\"中的'a'，\"$5.28,\"中的'5'和\"3D.\"中的'3'。",
  },
  {
    key: "34",
    character: "\\W",
    meaning:
      "匹配一个非单字字符。等价于[^A-Za-z0-9_]。例如，/\\W/或者/[^A-Za-z0-9_]/匹配\"50%.\"中的'%'。",
  },
  {
    key: "35",
    character: "\\n",
    meaning:
      "在正则表达式中，它返回最后的第n个子捕获匹配的子字符串(捕获的数目以左括号计数)。比如/apple(,)\\sorange\\1/匹配\"apple,orange,cherry,peach.\"中的'apple,orange,'。",
  },
  {
    key: "36",
    character: "\\0",
    meaning:
      "匹配NULL（U+0000）字符，不要在这后面跟其他小数，因为\\0<digits>是一个八进制转义序列。",
  },
  {
    key: "37",
    character: "\\xhh",
    meaning: "匹配一个两位十六进制数（\\x00-\\xFF）表示的字符。",
  },
  {
    key: "38",
    character: "\\uhhhh",
    meaning: "匹配一个四位十六进制数表示的UTF-16代码单元。",
  },
  {
    key: "39",
    character: "\\u{hhhh}或\\u{hhhhh}",
    meaning: "（仅当设置了u标志时）匹配一个十六进制数表示的Unicode字符。",
  },
];

const ExampleApp: React.FC = () => (
  <Table pagination={false} bordered columns={columns} dataSource={data} />
);

const { Title, Paragraph } = Typography;

const RegexApp = () => {
  const [matches, setMatches] = useState([]);

  const onFinish = ({ regex, input }) => {
    try {
      const re = new RegExp(regex, "g");
      const result = input.match(re);
      setMatches(result || ["No matches found"]);
    } catch (error) {
      console.error(error);
      setMatches([]);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <Title>Regex Tester</Title>

      <Form onFinish={onFinish}>
        <Form.Item
          label="Regular Expression"
          name="regex"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Input" name="input" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Test
          </Button>
        </Form.Item>
      </Form>

      {matches.length > 0 && (
        <div>
          <Title level={2}>Matches:</Title>
          {matches.map((match, index) => (
            <Paragraph key={index}>{match}</Paragraph>
          ))}
        </div>
      )}

      <ExampleApp />
    </div>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <RegexApp />
      </main>
    </Layout>
  );
}
