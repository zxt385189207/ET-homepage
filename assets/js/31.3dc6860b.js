(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{338:function(t,e,s){"use strict";s.r(e);var n=s(6),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"component-based-design"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-based-design"}},[t._v("#")]),t._v(" Component-based design")]),t._v(" "),e("p",[t._v("In terms of code reuse and organization of data, object-oriented may be the first response. Object-oriented three features inheritance, encapsulation, polymorphism, to a certain extent can solve a lot of code reuse, data reuse problems. But object-oriented is not a panacea, it also has great flaws: # # 1.")]),t._v(" "),e("h2",{attrs:{id:"_1-data-structure-coupling-is-very-strong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-data-structure-coupling-is-very-strong"}},[t._v("#")]),t._v(" 1. data structure coupling is very strong")]),t._v(" "),e("p",[t._v("Once a field is added or removed from a parent class, it may have to affect all subclasses and affect all subclass-related logic. This seems very inflexible, in a complex set of inheritance system, to change the fields in the parent class will become more and more troublesome, let's say ABC is a subclass of D, one day found the need to add a data that AB has, but C does not, then this data is certainly not good to put into the parent class, only AB abstracted out of a parent class E, E inherited from D, AB common fields added to E, once the inheritance structure Once the inheritance structure has changed, the interface may also need to change, let's say there is an interface incoming parameter type is E, when AB no longer needs the common field, then the inheritance relationship needs to be adjusted so that AB inherits D again, then the interface incoming parameter type needs to be changed to D, where the logic code is likely to be adjusted. What's worse is that the game logic changes very complicated and very often, maybe today a field is added, tomorrow it is deleted, if every time to adjust the inheritance structure, it is a nightmare. Inheritance structure feels very powerless in the face of frequent data structure adjustment.")]),t._v(" "),e("h2",{attrs:{id:"_2-difficult-to-hot-plug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-difficult-to-hot-plug"}},[t._v("#")]),t._v(" 2. Difficult to hot-plug")]),t._v(" "),e("p",[t._v("Inheritance structure can't add or delete fields at runtime, for example, Player usually walks, and then rides after using mount. The problem is that the information about the mount would need to be hanging on top of the Player object all the time. This makes it inflexible. Why do I need to have the horse data in memory when I'm not riding? The interface has the same problem, a class implements an interface, then the interface will always stick to the class, you want to get rid of her can not, or horse riding for example, the player player can ride, then may inherit a riding interface, the problem is, when I the Player from the mount, the player player still has the riding interface, there is no way to There is no way to dynamically delete this interface! The example may not be quite right, but the reasoning should be clear.")]),t._v(" "),e("p",[t._v("The use of object-oriented may lead to disastrous consequences, game development in the new and old, there are good skills, there are poor skills. People like to be lazy, when you find the trouble to adjust the inheritance relationship, it is possible to add a field in AB to save trouble directly into the parent class D. The result is that C somehow has an extra field that is useless. The key can not be found, and finally lead to the parent class D is getting bigger and bigger, in the end, it may simply not ABC, directly let all the objects into D, convenient well! Yes, many games are doing this, the development of the end simply do not care about the inheritance relationship, because you want to manage can not manage.")]),t._v(" "),e("h2",{attrs:{id:"_3-method-and-data-coupling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-method-and-data-coupling"}},[t._v("#")]),t._v(" 3. method and data coupling")]),t._v(" "),e("p",[t._v("Traditional object-oriented are class with methods, and especially advocate virtual function polymorphism. Methods and data put together brings a lot of coupling problems. In order to solve these coupling, we came up with a large number of design patterns, such as dependency interfaces, dependency transposition. To be honest, this is pants down, in order to understand the coupling, make the class into an interface, and then inherit from the interface, is this not called dependency? These practices lead to code that is full of interfaces and extremely difficult to read. There is no standard for writing up code, and the code written by experts and rookies is completely different. Most coders are logic boys, who have time to think about how to design this class every day ah? As the logic becomes more and more complex class inside the method will become increasingly large, the terrible thing is that this is the method of the class, extremely difficult to refactor, many projects can see the class inside the existence of tens of thousands of lines of code of virtual functions. Gosh!")]),t._v(" "),e("p",[t._v("Object-oriented in the face of complex game logic is very powerless, so many game developers have gone backwards, using process-oriented development game, process-oriented, simple and brutal, do not consider complex inheritance, do not consider abstraction, do not consider polymorphism, is the development of the session of freestyle, roll up your sleeves on the jerk, but at the same time, the reusability of the code logic, data reusability is also greatly reduced. Process-oriented is also not a good game development model.")]),t._v(" "),e("p",[t._v("Component pattern is a good solution to object-oriented and process-oriented defects, in the game client is very widely used, Unity3d, Unreal 4, and so on are using the component pattern. The characteristics of the component pattern.")]),t._v(" "),e("ol",[e("li",[t._v("Highly modular, a component is a piece of data plus a paragraph of logic")]),t._v(" "),e("li",[t._v("Components can be hot-pluggable, you need to add, do not need to remove")]),t._v(" "),e("li",[t._v("Very few dependencies between types, any type of adding or removing components will not affect other types.")])]),t._v(" "),e("p",[t._v("But at present only a very small number of server-side design using components, Watchtower server-side should be the use of component design, Watchtower developers called ECS architecture, in fact, is a variant of the component model, E is Entity, C is Component, S is System, in fact, is the component Component logic and data stripped, the logic part called System, the topic is far away, or back to the ET framework to put.")]),t._v(" "),e("p",[t._v("ET framework uses the design of components. Everything is Entity and Component, any class inherited from Entity can be mounted components, such as the player class.")]),t._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sealed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entity")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" Account "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")])]),t._v(" UnitId "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Awake")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" account"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Account "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" account"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dispose")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dispose")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br")])]),e("p",[t._v("Mount a MoveComponent to the player object so that the player can move, a Backpack component to the player so that the player can manage items, a Skill component to the player so that the player can cast skills, and a Buff component to manage buffs.")]),t._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MoveComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplayer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ItemsComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplayer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SpellComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BuffComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" player"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BuffComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("Components are highly reusable, for example, an NPC, he can also move, just put MoveComponent on the NPC, some NPCs can also cast skills, then put SpellComponent on it, NPCs do not need a backpack, then there is no need to hang ItemsComponent")]),t._v(" "),e("p",[t._v("ET framework modules are all made into the form of components, a process is also made of different components stitched together. Let's say Loginserver needs to connect externally and also needs to connect with the server internally, then login server hooks up")]),t._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// intranet network component NetInnerComponent, which handles the connection to the intranet  ")]),t._v("\nGame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NetInnerComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("innerConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" innerConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NetOuterComponent, an extranet component, handles the connection to the client")]),t._v("\nGame"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NetOuterComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outerConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outerConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Port"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("For example, battle server does not need to connect to the external network (external network messages are forwarded by gateserver), so it is natural to just mount an internal network component.\nSimilar to Unity3d components, ET framework also provides component events, such as Awake, Start, Update, etc.. To add these events to a Component or Entity, you must write a helper class. For example, if the NetInnerComponent component needs Awake and Update methods, then add a class like this.")]),t._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token attribute"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectEvent")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NetInnerComponentEvent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObjectEvent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NetInnerComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IAwake")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IUpdate")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Awake")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Awake")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[t._v("In this way, NetInnerComponent calls its Awake method after AddComponent and calls the Update method every frame.\nET does not use reflection like Unity to implement this kind of functionality, because reflection performance is poor, and the advantage of this implementation is that the class can be placed in the hot update dll, so that the component's Awake Start, Update method and other methods can be placed in the hot update layer. Entity and Component will be made into a class without methods, methods are put into the hot update layer to facilitate the hot update to fix logic bugs.")]),t._v(" "),e("p",[t._v("The biggest advantage of component-based development is that whether rookie or expert, the development of a function can quickly know how to organize data how to organize the logic. Object-oriented can be completely abandoned. Object-oriented development using the most headache is that I should inherit which class it? Before doing the most horrible is Unreal three, Unreal three inheritance structure is very multi-layer, completely do not know where they need to start inheritance. In the end, it could lead to a very small function that inherits a very large class, which is common in Unreal 3 development. So Unreal 4 switched to the component pattern. The module isolation of the component pattern is very good, the technical rookie a component written very poorly, will not affect the other modules, the big deal is to rewrite the component on the good.")]),t._v(" "),e("p",[t._v("ET's component design innovation, method and data separation, completely decoupled, no brainstorming how to uncouple, write static methods at will, there is no coupling, even the code written by rookies is easy to refactor.")]),t._v(" "),e("p",[t._v("It is because ET uses the detachable component model, ET can load all server components to the same process, then this one process can be used as a set of distributed servers. From then on it is possible to debug distributed servers with vs. Because of this, the usual development only use a process, when the release of the release into multiple processes on the line. Honestly, not to brag, this is a great invention, this invention solves a big problem in the development of distributed game servers, greatly improving the efficiency of development.")])])}),[],!1,null,null,null);e.default=a.exports}}]);