(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{326:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"actor模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actor模型"}},[t._v("#")]),t._v(" Actor模型")]),t._v(" "),s("h3",{attrs:{id:"actor介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actor介绍"}},[t._v("#")]),t._v(" Actor介绍")]),t._v(" "),s("p",[t._v("在讨论Actor模型之前先要讨论下ET的架构，游戏服务器为了利用多核一般有两种架构，单线程多进程跟单进程多线程架构。两种架构本质上其实区别不大，因为游戏逻辑开发都需要用单线程，即使是单进程多线程架构，也要用一定的方法保证单线程开发逻辑。ET采用的是单线程多进程的架构，而传统Actor模型一般是单进程多线程的架构，这点是比较大的区别，不能说谁更好，只能说各有优势。优劣如下：")]),t._v(" "),s("ol",[s("li",[t._v("逻辑需要单线程这点都是一样的，erlang进程逻辑是单线程的，skynet lua虚拟机也是单线程的。ET中一个进程其实相当于一个erlang进程，一个skynet lua虚拟机。")]),t._v(" "),s("li",[t._v("采用单线程多进程不需要自己再写一套profiler工具，可以利用很多现成的profiler工具，例如查看内存，cpu占用直接用top命令，这点erlang跟skynet都需要自己另外搞一套工具。")]),t._v(" "),s("li",[t._v("多进程单线程架构还有个好处，单台物理机跟多台物理机是没有区别的，单进程多线程还需要考虑多台物理机的处理。")]),t._v(" "),s("li",[t._v("多进程单线程架构一点缺陷是消息跨进程需要进行序列化反序列化，占用一点资源。另外发送网络消息会有几毫秒延时。一般这些影响可以忽略。")])]),t._v(" "),s("p",[t._v("最开始Actor模型是给单进程多线程架构使用的，这是有原因的，因为多线程架构开发者很容易随意的访问共享变量，比方说一个变量a, 线程1能访问，线程2也能访问，这样两个线程在访问变量a的时候都需要加锁，共享变量多了之后锁到处都是，会变得无法维护，框架肯定不能出现到处是线程共享变量的情况。为了保证多线程架构不出问题，必须提供一种开发模型保证多线程开发简单又安全。erlang语言的并发机制就是actor模型。erlang虚拟机使用多线程来利用多核。erlang设计了一种机制，它在虚拟机之上设计了自己的进程。最简单的，每个erlang进程都管理自己的变量，每个erlang进程的逻辑都跑在一个线程上，erlang进程跟进程之间逻辑完全隔离，这样就不存在两个线程访问同一变量的情况了也就不存在多线程竞争的问题。接下来问题又出现了，既然每个erlang进程都有自己的数据，逻辑完全是隔离的，两个erlang进程之间应该怎么进行通信呢？这时Actor模型就登场了。erlang设计了一种消息机制：一个进程可以向其它进程发送消息，erlang进程之间通过消息来进行通信，看到这会不会感觉很熟悉？这不就是操作系统进程间通信用的消息队列吗？没错，其实是类似的。erlang里面拿到进程的id就能给这个进程发送消息。")]),t._v(" "),s("p",[t._v("如果消息只发给进程其实还是有点不方便。比如拿一个erlang进程做moba战队进程，战斗进程中有10个玩家，如果使用erlang的actor消息，消息只能发送给战斗进程，但是很多时候消息是需要发送给一个玩家的，这时erlang需要根据消息中的玩家Id，把消息再次分发给具体的玩家，这样其实多绕了一圈。")]),t._v(" "),s("h3",{attrs:{id:"et的actor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#et的actor"}},[t._v("#")]),t._v(" ET的Actor")]),t._v(" "),s("p",[t._v("ET根据自己架构得特点，没有完全照搬erlang的Actor模型，而是提供了Entity对象级别的Actor模型。这点跟erlang甚至传统的Actor机制不一样。ET中，Actor是Entity对象，Entity挂上一个MailboxComponent组件就是一个Actor了。只需要知道Entity的InstanceId就可以发消息给这个Entity了。其实erlang的Actor模型不过是ET中的一种特例，比如给ET服务端Game.Scene当做一个Actor，这样就可以变成进程级别的Actor。Actor本质就是一种消息机制，这种消息机制不用关心位置，只需要知道对方的InstanceId（ET）或者进程的Pid（erlang）就能发给对方。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("语言")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("ET")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Erlang")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Skynet")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("架构")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("单线程多进程")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("单进程多线程")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("单进程多线程")])]),t._v(" "),s("tr",[s("td",[t._v("Actor")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Entity")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("erlang进程")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("lua虚拟机")])]),t._v(" "),s("tr",[s("td",[t._v("ActorId")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Entity.InstanceId")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("erlang进程Id")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("服务地址")])])])]),t._v(" "),s("h3",{attrs:{id:"et的actor的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#et的actor的使用"}},[t._v("#")]),t._v(" ET的Actor的使用")]),t._v(" "),s("p",[t._v("普通的Actor，我们可以参照Gate Session。map中一个Unit，Unit身上保存了这个玩家对应的gate session。这样，map中的消息如果需要发给客户端，只需要把消息发送给gate session，gate session在收到消息的时候转发给客户端即可。map进程发送消息给gate session就是典型的actor模型。它不需要知道gate session的位置，只需要知道它的InstanceId即可。MessageHelper.cs中，通过GateSessionActorId获取一个ActorMessageSender，然后发送。")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从Game.Scene上获取ActorSenderComponent，然后通过InstanceId获取ActorMessageSender")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActorSenderComponent")]),t._v(" actorSenderComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Game"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetComponent")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ActorSenderComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActorMessageSender")]),t._v(" actorMessageSender "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" actorSenderComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unitGateComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GateSessionActorId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// send")]),t._v("\nactorMessageSender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rpc")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" actorMessageSender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("问题是map中怎么才能知道gate session的InstanceId呢？这就是你需要想方设法传过去了，比如ET中，玩家在登录gate的时候，gate session挂上一个信箱MailBoxComponent，C2G_LoginGateHandler.cs中")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MailBoxComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MailboxType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GateSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("玩家登录map进程的时候会把这个gate session的InstanceId带进map中去，C2G_EnterMapHandler.cs中")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("M2G_CreateUnit")]),t._v(" createUnit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M2G_CreateUnit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" mapSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("G2M_CreateUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PlayerId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" GateSessionId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InstanceId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"actor消息的处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actor消息的处理"}},[t._v("#")]),t._v(" Actor消息的处理")]),t._v(" "),s("p",[t._v("首先，消息到达MailboxComponent，MailboxComponent是有类型的，不同的类型邮箱可以做不同的处理。目前有两种邮箱类型GateSession跟MessageDispatcher。GateSession邮箱在收到消息的时候会立即转发给客户端，MessageDispatcher类型会再次对Actor消息进行分发到具体的Handler处理，默认的MailboxComponent类型是MessageDispatcher。自定义一个邮箱类型也很简单，继承IMailboxHandler接口，加上MailboxHandler标签即可。那么为什么需要加这么个功能呢，在其它的actor模型中是不存在这个特点的，一般是收到消息就进行分发处理了。原因是GateSession的设计，并不需要进行分发处理，因此我在这里加上了邮箱类型这种设计。MessageDispatcher的处理方式有两种一种是处理对方Send过来的消息，一种是rpc消息")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理Send的消息, 需要继承AMActorHandler抽象类，抽象类第一个泛型参数是Actor的类型，第二个参数是消息的类型")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActorMessageHandler")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_TestHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AMActorHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Actor_Test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("ETTask")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unit")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_Test")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tLog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理Rpc消息, 需要继承AMActorRpcHandler抽象类，抽象类第一个泛型参数是Actor的类型，第二个参数是消息的类型，第三个参数是返回消息的类型")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActorMessageHandler")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_TransferHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AMActorRpcHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Actor_TransferRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Actor_TransferResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("ETTask")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unit")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_TransferRequest")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Actor_TransferResponse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" reply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_TransferResponse")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Actor_TransferResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReplyError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])]),s("p",[t._v("我们需要注意一下，Actor消息有死锁的可能，比如A call消息给B，B call给C，C call给A。因为MailboxComponent本质上是一个消息队列，它开启了一个协程会一个一个消息处理，返回ETTask表示这个消息处理类会阻塞MailboxComponent队列的其它消息。所以如果出现死锁，我们就不希望某个消息处理阻塞掉MailboxComponent其它消息的处理，我们可以在消息处理类里面新开一个协程来处理就行了。例如:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActorMessageHandler")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_TestHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AMActorHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Actor_Test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("ETTask")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unit")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_Test")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RunAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Coroutine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("ETVoid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RunAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unit")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Actor_Test")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("相关资料可以谷歌一下Actor死锁的问题。")])])}),[],!1,null,null,null);s.default=e.exports}}]);