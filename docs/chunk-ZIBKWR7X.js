import {
  NgComponentOutlet,
  NgForOf,
  NgIf,
  RouterModule,
  __export,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-W6U5T2JM.js";

// src/app/features/website/home/items/news/news.component.ts
var _NewsComponent = class _NewsComponent {
  constructor() {
    this.title = "News";
  }
};
_NewsComponent.\u0275fac = function NewsComponent_Factory(t) {
  return new (t || _NewsComponent)();
};
_NewsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsComponent, selectors: [["app-news"]], inputs: { title: "title" }, decls: 2, vars: 0, template: function NewsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "news works!");
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=news.component.css.map */"] });
var NewsComponent = _NewsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsComponent, { className: "NewsComponent" });
})();

// src/app/features/website/home/items/live-game/live-game.component.ts
var _LiveGameComponent = class _LiveGameComponent {
  constructor() {
    this.gameId = "";
    this.game = {
      name: "Calcio"
    };
  }
};
_LiveGameComponent.\u0275fac = function LiveGameComponent_Factory(t) {
  return new (t || _LiveGameComponent)();
};
_LiveGameComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveGameComponent, selectors: [["app-live-game"]], inputs: { gameId: "gameId" }, decls: 2, vars: 1, consts: [[1, "text-xl"]], template: function LiveGameComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.game.name);
  }
}, styles: ["\n\n/*# sourceMappingURL=live-game.component.css.map */"] });
var LiveGameComponent = _LiveGameComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveGameComponent, { className: "LiveGameComponent" });
})();

// src/app/features/website/home/items/state/state.component.ts
var _StateComponent = class _StateComponent {
  constructor() {
    this.title = "State";
  }
};
_StateComponent.\u0275fac = function StateComponent_Factory(t) {
  return new (t || _StateComponent)();
};
_StateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StateComponent, selectors: [["app-state"]], inputs: { title: "title" }, decls: 2, vars: 0, template: function StateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "state works!");
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=state.component.css.map */"] });
var StateComponent = _StateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StateComponent, { className: "StateComponent" });
})();

// src/app/features/website/home/home.component.ts
function HomeComponent_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function HomeComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275template(2, HomeComponent_div_12_ng_container_2_Template, 1, 0, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const component_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngComponentOutlet", component_r2.component)("ngComponentOutletInputs", component_r2.data);
  }
}
function HomeComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const game_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(game_r4.game);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Posizione: ", game_r4.rank, "");
  }
}
var _HomeComponent = class _HomeComponent {
  constructor() {
    this.components = [
      {
        component: LiveGameComponent,
        data: {
          gameId: "Calcio"
        }
      },
      {
        component: NewsComponent,
        data: {
          title: "Home"
        }
      },
      {
        component: StateComponent,
        data: {
          title: "Live Game"
        }
      }
    ];
    this.currentLeader = {
      name: "Villa",
      points: 129,
      image: "panda.svg",
      gameScores: [
        {
          game: "Calcio",
          rank: 1,
          jolly: false
        },
        {
          game: "Pallavolo",
          rank: 3,
          jolly: false
        },
        {
          game: "Staffetta",
          rank: 1,
          jolly: true
        },
        {
          game: "Morra",
          rank: 2,
          jolly: false
        },
        {
          game: "Corsa coi sacchi",
          rank: 5,
          jolly: false
        }
      ]
    };
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-website"]], decls: 27, vars: 5, consts: [["src", "assets/images/dddepth-342.jpg", 1, "fixed", "w-full", "h-full", "top-0", "left-0", "-z-10", "object-cover", "opacity-35"], [1, "xl:hidden"], [1, "h-full", "w-full", "relative", "flex", "flex-col", "scroll-smooth", "overflow-scroll", "justify-start", "gap-2", "items-center"], [1, "w-full", "h-5/6", "flex-col", "flex", "rounded-b-3xl", "bg-gray-300/60", "backdrop-blur"], [1, "mt-5"], [1, "text-4xl", "text-center", "flex", "flex-col", "justify-start", "items-center", "h-full", "w-full"], [1, "font-bold"], [1, "items-center", "w-full", "justify-start"], [1, "flex", "gap-4", "w-full", "p-5", "pl-10", "overflow-scroll"], ["class", "rounded-2xl bg-sky-100/80  flex flex-col items-center justify-start pt-3 w-72 h-96 gap-3", 4, "ngFor", "ngForOf"], [1, "h-96", "mt-10"], [1, "h-96", "mt-20", "bg-sky-900"], [1, "max-xl:hidden", "p-20", "h-full", "w-full"], [1, "rounded-3xl", "bg-white/50", "h-3/5", "w-full", "flex", "justify-around", "p-10"], [1, "flex", "flex-col", "items-center", "justify-around"], [1, "text-5xl", "font-bold"], ["alt", "winner", 1, "object-contain", "h-3/5", 3, "src"], [1, "flex", "w-1/3", "flex-col"], [1, "text-3xl", "font-bold"], [1, "flex", "flex-col", "gap-2", "overflow-scroll"], ["class", "flex justify-between w-full p-5 bg-sky-800/30 rounded-3xl ", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "bg-sky-100/80", "flex", "flex-col", "items-center", "justify-start", "pt-3", "w-72", "h-96", "gap-3"], [1, "w-72"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "flex", "justify-between", "w-full", "p-5", "bg-sky-800/30", "rounded-3xl"], [1, "text-2xl"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
    \u0275\u0275text(6, " Palio dei borghi");
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "span", 6);
    \u0275\u0275text(9, "2024");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
    \u0275\u0275template(12, HomeComponent_div_12_Template, 3, 2, "div", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
    \u0275\u0275text(15, " zaoooo ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "h1", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 17)(23, "span", 18);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19);
    \u0275\u0275template(26, HomeComponent_div_26_Template, 5, 2, "div", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx.components);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.currentLeader.name);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("src", "assets/images/", ctx.currentLeader.image, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Punti Totali: ", ctx.currentLeader.points, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.currentLeader.gameScores);
  }
}, dependencies: [NgComponentOutlet, NgForOf], styles: ["\n\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();

// src/app/features/website/games/games.component.ts
function GamesComponent_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const game_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275propertyInterpolate1("src", "assets/images/", ctx_r2.images[game_r1.winner], "", \u0275\u0275sanitizeUrl);
  }
}
function GamesComponent_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const game_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", game_r1.winner, " ");
  }
}
var _c0 = (a0) => ({ "text-gray-400/50": a0 });
var _c1 = (a0, a1, a2, a3, a4, a5) => ({ "bg-gray-100/60": a0, "bg-yellow-300/60": a1, "bg-red-500/60": a2, "bg-green-500/60": a3, "bg-blue-500/60": a4, "bg-black/30": a5 });
function GamesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275template(2, GamesComponent_div_2_img_2_Template, 1, 1, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "span", 10);
    \u0275\u0275text(9, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14, "emoji_events");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, GamesComponent_div_2_div_15_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const game_r1 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pureFunction1(8, _c0, !game_r1.winner));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", game_r1.winner);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pureFunction6(10, _c1, !game_r1.winner, game_r1.winner === "sottocastello", game_r1.winner === "sornico", game_r1.winner === "sottomonte", game_r1.winner === "salt", game_r1.winner === "villa"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(game_r1.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(game_r1.date);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", game_r1.winner);
  }
}
var _GamesComponent = class _GamesComponent {
  constructor() {
    this.images = {
      "sottocastello": "horse.svg",
      "villa": "panda.svg",
      "sornico": "squirrel.svg",
      "sottomonte": "rabbit.svg",
      "salt": "lobster.svg"
    };
    this.games = [
      { "name": "Calcio", "winner": "villa", "date": "2021-09-01" },
      { "name": "Pallavolo", "winner": "sottocastello", "date": "2021-09-02" },
      { "name": "Morra", "winner": "sornico", "date": "2021-09-03" },
      { "name": "Briscola", "winner": "sottomonte", "date": ["2021-09-04", "2021-09-05"] },
      { "name": "Corsa nei sacchi", "date": "2021-09-06" },
      { "name": "Freccette", "winner": "villa", "date": "2021-09-07" },
      { "name": "Intesa Vincente", "winner": "salt", "date": "2021-09-08" },
      { "name": "Sfilata", "date": ["2021-09-09", "2021-09-10"] },
      { "name": "Camerieri maschile", "winner": "sornico", "date": "2021-09-11" },
      { "name": "Camerieri femminile", "winner": "sottocastello", "date": "2021-09-11" },
      { "name": "Bale Pignote Senior", "winner": "sottomonte", "date": "2021-09-12" },
      { "name": "Bale Pignote Junior", "date": "2021-09-13" },
      { "name": "Taglio del ceppo maschile", "winner": "villa", "date": "2021-09-14" },
      { "name": "Taglio del ceppo femminile", "winner": "salt", "date": ["2021-09-15", "2021-09-16"] },
      { "name": "Strade Mate", "date": "2021-09-17" },
      { "name": "Cibbe Maschile", "winner": "villa", "date": "2021-09-18" },
      { "name": "Cibbe Femminile", "winner": "sornico", "date": "2021-09-18" }
    ].sort((a, b) => {
      if (a.winner && !b.winner)
        return -1;
      else
        return a.date < b.date ? -1 : 1;
    });
  }
};
_GamesComponent.\u0275fac = function GamesComponent_Factory(t) {
  return new (t || _GamesComponent)();
};
_GamesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GamesComponent, selectors: [["app-games"]], decls: 3, vars: 1, consts: [["src", "assets/images/dddepth-342.jpg", "alt", "", 1, "fixed", "w-full", "h-full", "top-0", "left-0", "-z-10", "object-cover", "opacity-35"], [1, "mt-10", "w-full", "h-full", "flex", "flex-col", "gap-4", "p-5"], ["class", "relative w-full h-full", 3, "class", 4, "ngFor", "ngForOf"], [1, "relative", "w-full", "h-full"], [1, "absolute", "backdrop-blur", "h-full", "flex", "justify-end", "p-2", "w-full", "top-0", "left-0", "-z-10"], ["class", "h-full object-contain opacity-30", "alt", "", 3, "src", 4, "ngIf"], [1, "w-full", "p-5", "shadow", "flex", "flex-col", "items-center", "justify-start", "rounded-2xl"], [1, "text-xl"], [1, "flex", "justify-between", "w-full"], [1, "flex", "gap-1", "items-center"], [1, "material-icons-outlined"], [1, "flex", "w-2/5", "flex-col", "items-center", "justify-center"], [1, "material-icons-outlined", "text-6xl"], [4, "ngIf"], ["alt", "", 1, "h-full", "object-contain", "opacity-30", 3, "src"]], template: function GamesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275template(2, GamesComponent_div_2_Template, 16, 17, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.games);
  }
}, dependencies: [NgForOf, NgIf], styles: ["\n\n/*# sourceMappingURL=games.component.css.map */"] });
var GamesComponent = _GamesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GamesComponent, { className: "GamesComponent" });
})();

// src/app/features/website/calendar/calendar.component.ts
function CalendarComponent_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
var _c02 = (a0) => ({ gridColumn: a0, gridRow: 1 });
function CalendarComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CalendarComponent_For_7_Conditional_6_Template, 1, 0, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const index_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(5, _c02, index_r5 + 2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.toWeekday(day_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r4.getDate());
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r0.isToday(day_r4) ? 6 : -1);
  }
}
var _c12 = (a0) => ({ gridRow: a0 });
function CalendarComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r10 = ctx.$implicit;
    const hIndex_r11 = ctx.$index;
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(3, _c12, hIndex_r11 + 3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", hour_r10, ":00 ");
  }
}
function CalendarComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
  if (rf & 2) {
    const hIndex_r16 = ctx.$index;
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(2, _c12, hIndex_r16 + 3));
  }
}
var _c2 = (a0, a1, a2) => ({ "height": a0, "top": a1, "left": a2 });
var _c3 = (a0) => ({ backgroundColor: a0 });
function CalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r20 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction3(6, _c2, event_r20.duration / 60 * 48 + "px", 5 + (ctx_r3.toDate(event_r20.startDate).getTime() % 864e5 / (1e3 * 60 * 60) - 4) * 48 + "px", (ctx_r3.findDayIndex(event_r20) + 0.5) * 96 + "px"));
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(10, _c3, event_r20.color));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatHour(ctx_r3.toDate(event_r20.startDate)));
  }
}
var _c4 = (a0) => ({ gridTemplateColumns: a0 });
var events = [
  {
    "meetingDate": "2024-08-02T18:30:00",
    "startDate": "2024-08-02T19:00:00",
    "name": "Sfilata dei carri",
    "duration": 60,
    "color": "#DC143CAA"
  },
  {
    "meetingDate": "2024-08-02T21:30:00",
    "startDate": "2024-08-02T21:30:00",
    "name": "Taglio del ceppo",
    "duration": 60,
    "color": "#8A2BE2AA"
  },
  {
    "meetingDate": "2024-08-03T10:30:00",
    "startDate": "2024-08-03T11:00:00",
    "name": "Corsa nei sacchi",
    "duration": 60,
    "color": "#FF8C00AA"
  },
  {
    "meetingDate": "2024-08-03T15:00:00",
    "startDate": "2024-08-03T15:30:00",
    "name": "Strade mate",
    "duration": 60,
    "color": "#FFD700AA"
  },
  {
    "meetingDate": "2024-08-03T19:00:00",
    "startDate": "2024-08-03T19:30:00",
    "name": "Staffetta",
    "duration": 60,
    "color": "#FF4500AA"
  },
  {
    "meetingDate": "2024-08-04T08:30:00",
    "startDate": "2024-08-04T09:00:00",
    "name": "Cibbe",
    "duration": 240,
    "color": "#FF6347AA"
  },
  {
    "meetingDate": "2024-08-04T15:30:00",
    "startDate": "2024-08-04T16:00:00",
    "name": "Bocce",
    "duration": 120,
    "color": "#DC1934AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-05T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#FF03F0AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-05T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#A11004AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-06T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#0FFFF0AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-06T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#803386AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-07T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#AFCA06AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-07T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#7DDAB9AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-08T20:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#E07D17AA"
  },
  {
    "meetingDate": null,
    "startDate": "2024-08-08T21:00:00",
    "name": "Calcio eliminatorie",
    "duration": 60,
    "color": "#E6648BAA"
  },
  {
    "meetingDate": "2024-08-09T20:30:00",
    "startDate": "2024-08-09T20:30:00",
    "name": "Calcio finali 3^/4^ posto",
    "duration": 60,
    "color": "#1E2539AA"
  },
  {
    "meetingDate": "2024-08-09T21:30:00",
    "startDate": "2024-08-09T21:30:00",
    "name": "Calcio finali 1^/2^ posto",
    "duration": 60,
    "color": "#C81EB7AA"
  },
  {
    "meetingDate": "2024-08-10T08:00:00",
    "startDate": "2024-08-10T08:30:00",
    "name": "Pallavolo",
    "duration": 600,
    "color": "#d93f43AA"
  },
  {
    "meetingDate": "2024-08-11T14:30:00",
    "startDate": "2024-08-11T15:00:00",
    "name": "Freccette",
    "duration": 240,
    "color": "#3f145dAA"
  },
  {
    "meetingDate": "2024-08-11T20:30:00",
    "startDate": "2024-08-11T21:00:00",
    "name": "Sfilata di moda",
    "duration": 60,
    "color": "#61fcf0AA"
  },
  {
    "meetingDate": "2024-08-12T20:00:00",
    "startDate": "2024-08-12T20:30:00",
    "name": "Briscola",
    "duration": 180,
    "color": "#1E2539AA"
  },
  {
    "meetingDate": "2024-08-13T20:00:00",
    "startDate": "2024-08-13T20:30:00",
    "name": "Morra",
    "duration": 180,
    "color": "#3f145dAA"
  },
  {
    "meetingDate": "2024-08-14T14:00:00",
    "startDate": "2024-08-14T14:30:00",
    "name": "Bale pignote jr",
    "duration": 240,
    "color": "#3f145dAA"
  },
  {
    "meetingDate": "2024-08-14T20:30:00",
    "startDate": "2024-08-14T21:00:00",
    "name": "Intesa vincente",
    "duration": 60,
    "color": "#4908e9AA"
  },
  {
    "meetingDate": "2024-08-15T10:30:00",
    "startDate": "2024-08-15T11:00:00",
    "name": "Camerieri",
    "duration": 120,
    "color": "#ae0915AA"
  },
  {
    "meetingDate": "2024-08-15T14:00:00",
    "startDate": "2024-08-15T14:30:00",
    "name": "Balem pignote sr",
    "duration": 240,
    "color": "#19a547AA"
  }
];
var _CalendarComponent = class _CalendarComponent {
  constructor() {
    this.days = Array.from({ length: 15 }, (_, i) => new Date(2024, 7, i + 2));
    this.events = events;
    this.hours = Array.from({ length: 15 }, (_, i) => i + 8);
    this.today = this.days[1];
    this.height = this.$refs?.heightRefEl?.clientHeight;
  }
  formatHour(date) {
    return date.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  }
  toWeekday(date) {
    return date.toLocaleDateString("it-IT", { weekday: "short" });
  }
  isToday(date) {
    return date.toDateString() === this.today.toDateString();
  }
  toDate(date) {
    return new Date(date);
  }
  findDayIndex(event) {
    return this.days.findIndex((d) => d.toDateString() === new Date(event.startDate).toDateString());
  }
};
_CalendarComponent.\u0275fac = function CalendarComponent_Factory(t) {
  return new (t || _CalendarComponent)();
};
_CalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [["src", "../../../../assets/images/dddepth-342.jpg", 1, "fixed", "w-full", "h-full", "top-0", "left-0", "-z-10", "object-cover", "opacity-35"], [1, "h-full", "relative", "w-full", "flex-col", "flex", "py-2", "px-2"], [1, "relative", "w-full", "h-12", "pb-5", "flex", "text-xl"], [1, "w-full", "flex", "justify-center", "items-center"], [1, "relative", "overscroll-none", "grow", "w-full", "grid", "flex-col", "overflow-scroll"], [1, "col-start-1", "col-span-full", "h-5"], [1, "shrink-0", "z-30", "sticky", "top-0", "w-24", "h-20", "flex", "flex-col", "justify-center", "items-center"], [1, "relative", "flex", "flex-col", "justify-center", "items-center", "w-full", "h-full"], [1, ""], [1, "text-3xl"], ["class", "absolute border-sky-800 w-full bottom-0 border-t-[5px] rounded-t-2xl"], [1, "absolute", "border-sky-800", "w-full", "bottom-0", "border-t-[5px]", "rounded-t-2xl"], [1, "col-start-1", "sticky", "flex", "left-0", "text-black"], [1, "relative", "pl-1", "pr-1", "-top-3", "flex", "font-bold", "z-10"], [1, "h-12", "ml-12", "-z-20", "col-span-full", "col-start-1", "border-gray-400", "border-dashed", "border-t"], [1, "h-full", "absolute", "-z-10", "w-24", "text-sm", "overflow-hidden", "drop-shadow"], [1, "text-center", "text-gray-800", "h-full", "pl-2", "flex-col", "flex", "items-start", "justify-start", "text-xs", "w-full", "rounded-xl"], [1, "font-bold", "text-start"], ["class", "shrink-0 z-30  sticky top-0 w-24 h-20 flex flex-col justify-center items-center", 3, "style"], ["class", "col-start-1 sticky flex left-0 text-black", 3, "style"], ["class", "h-12 ml-12 -z-20 col-span-full col-start-1 border-gray-400 border-dashed border-t", 3, "style"], ["class", "h-full\n           absolute\n           -z-10\n          w-24\n           text-sm overflow-hidden drop-shadow", 3, "style"]], template: function CalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275text(4, " Agosto ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275repeaterCreate(6, CalendarComponent_For_7_Template, 7, 7, "div", 18, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(8, "div", 5);
    \u0275\u0275repeaterCreate(9, CalendarComponent_For_10_Template, 3, 5, "div", 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(11, CalendarComponent_For_12_Template, 1, 4, "div", 20, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(13, CalendarComponent_For_14_Template, 6, 12, "div", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(2, _c4, "1fr repeat(" + ctx.days.length + ", 2fr)"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.days);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.hours);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.events);
  }
}, styles: ["\n\n/*# sourceMappingURL=calendar.component.css.map */"] });
var CalendarComponent = _CalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent" });
})();

// src/app/features/website/leaderboards/scores.json
var scores_exports = {};
__export(scores_exports, {
  default: () => scores_default,
  "game-scores": () => game_scores,
  global: () => global
});
var global = [
  {
    player: "Sottocastello",
    points: 100
  },
  {
    player: "Somont",
    points: 90
  },
  {
    player: "Salt",
    points: 80
  },
  {
    player: "Villa",
    points: 70
  },
  {
    player: "Sornico",
    points: 60
  }
];
var game_scores = {
  Calcetto: [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  Pallavolo: [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  Cibb\u00E8: [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  Staffetta: [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  "Camerieri Maschile": [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  "Camerieri Femminile": [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  "Corsa coi Sacchi": [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  "Strade Mate": [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  Briscola: [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  Morra: [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  "Bale Pignote": [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  "Bale Pignote Junior": [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ],
  Scatolone: [
    {
      player: "Sottocastello",
      points: 2
    },
    {
      player: "Somont",
      points: 4
    },
    {
      player: "Salt",
      points: 5
    },
    {
      player: "Villa",
      points: 7
    },
    {
      player: "Sornico",
      points: 10
    }
  ]
};
var scores_default = {
  global,
  "game-scores": game_scores
};

// src/app/features/website/leaderboards/leaderboard.ts
var Leaderboard = class _Leaderboard {
  static fromScores(scores) {
    return new _Leaderboard(scores);
  }
  constructor(participants) {
    this.participants = participants;
  }
  get topThree() {
    return this.participants.sort((a, b) => b.points - a.points).slice(0, 3);
  }
  get winner() {
    return this.participants.sort((a, b) => b.points - a.points)[0];
  }
};

// src/app/features/website/leaderboards/single-leaderboard/single-leaderboard.component.ts
var _c03 = (a0, a1, a2) => ({ "h-full": a0, "h-1/2": a1, "h-2/6": a2 });
function SingleLeaderboardComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r2 = ctx.$implicit;
    const index_r3 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(participant_r2.player);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", participant_r2.points, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pureFunction3(5, _c03, index_r3 === 0, index_r3 === 1, index_r3 === 2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", index_r3 + 1, " ");
  }
}
function SingleLeaderboardComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const participant_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", participant_r7.rank, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(participant_r7.player);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", participant_r7.points, " ");
  }
}
var _DecorateParticipantsPipe = class _DecorateParticipantsPipe {
  transform(participants) {
    return participants.map((participant, index) => {
      return __spreadProps(__spreadValues({}, participant), {
        rank: index + 1
      });
    });
  }
};
_DecorateParticipantsPipe.\u0275fac = function DecorateParticipantsPipe_Factory(t) {
  return new (t || _DecorateParticipantsPipe)();
};
_DecorateParticipantsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "decorateParticipants", type: _DecorateParticipantsPipe, pure: true, standalone: true });
var DecorateParticipantsPipe = _DecorateParticipantsPipe;
var _SingleLeaderboardComponent = class _SingleLeaderboardComponent {
};
_SingleLeaderboardComponent.\u0275fac = function SingleLeaderboardComponent_Factory(t) {
  return new (t || _SingleLeaderboardComponent)();
};
_SingleLeaderboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleLeaderboardComponent, selectors: [["single-leaderboard"]], inputs: { leaderboard: "leaderboard" }, decls: 10, vars: 2, consts: [[1, "w-full", "h-full", "flex-col", "flex", "gap-5"], [1, "relative", "-z-10", "w-full", "h-1/3", "min-h-64", "flex", "justify-around", "items-end", "px-4"], [1, "absolute", "z-10", "overflow-scroll", "h-full", "w-full"], [1, "rounded-2xl", "p-5", "pt-4", "mt-[80%]", "h-5/6", "overflow-hidden", "backdrop-blur", "w-full", "bg-white/60", "flex", "flex-col", "justify-start", "items-center", "gap-4"], [1, "w-1/5", "border-2", "border-gray-500", "rounded-2xl"], [1, "w-3/12", "h-full", "flex", "flex-col", "justify-end", "items-center"], [1, "material-icons-outlined", "text-3xl"], [1, "font-bold"], [1, "text", "text-gray-500"], [1, "text-center", "flex", "justify-center", "items-center", "w-full", "backdrop-blur", "bg-sky-900/30", "rounded-3xl"], [1, "flex", "border-b", "gap-4", "border-gray-400/40", "pb-3", "w-full"], [1, "w-1/12", "text-3xl"], [1, "w-2/12", "flex", "flex-col", "justify-center"], [1, ""], [1, "flex", "justify-end", "grow", "gap-2"], [1, "text-xs", "flex", "items-center"], ["class", "w-3/12 h-full flex flex-col justify-end items-center"], ["class", "flex border-b gap-4 border-gray-400/40 pb-3 w-full "]], template: function SingleLeaderboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275repeaterCreate(2, SingleLeaderboardComponent_For_3_Template, 9, 9, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "div", 4);
    \u0275\u0275repeaterCreate(7, SingleLeaderboardComponent_For_8_Template, 9, 3, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "decorateParticipants");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.leaderboard.topThree);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 0, ctx.leaderboard.participants));
  }
}, dependencies: [DecorateParticipantsPipe], styles: ["\n\n/*# sourceMappingURL=single-leaderboard.component.css.map */"] });
var SingleLeaderboardComponent = _SingleLeaderboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleLeaderboardComponent, { className: "SingleLeaderboardComponent" });
})();

// src/app/features/website/leaderboards/leaderboards.component.ts
function LeaderboardsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "single-leaderboard", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("leaderboard", ctx_r0.Leaderboard.fromScores(ctx_r0.scores.global));
  }
}
function LeaderboardsComponent_Conditional_10_Template(rf, ctx) {
}
var _c04 = (a0) => ({ "bg-gray-50/80": a0 });
var _LeaderboardsComponent = class _LeaderboardsComponent {
  constructor() {
    this.tab = "global";
    this.scores = scores_exports;
    this.Leaderboard = Leaderboard;
  }
  ngOnInit() {
  }
};
_LeaderboardsComponent.\u0275fac = function LeaderboardsComponent_Factory(t) {
  return new (t || _LeaderboardsComponent)();
};
_LeaderboardsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardsComponent, selectors: [["app-leaderboard"]], decls: 11, vars: 9, consts: [["src", "../../../../assets/images/dddepth-342.jpg", 1, "fixed", "w-full", "h-full", "top-0", "left-0", "-z-10", "object-cover", "opacity-35"], [1, "w-full", "relative", "h-full", "overflow-hidden", "flex", "flex-col", "items-center", "gap-5"], [1, "text-3xl", "p-2"], [1, "relative", "flex", "w-1/2", "border", "border-gray-50", "rounded-2xl", "p-0.5"], [1, "w-1/2", "duration-300", "transition-all", "text-center", "h-full", "rounded-2xl", 3, "click"], ["class", "w-full h-full", 3, "leaderboard"], [1, "w-full", "h-full", 3, "leaderboard"]], template: function LeaderboardsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "p", 2);
    \u0275\u0275text(3, "Classifica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275listener("click", function LeaderboardsComponent_Template_div_click_5_listener() {
      return ctx.tab = "global";
    });
    \u0275\u0275text(6, " Globale ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275listener("click", function LeaderboardsComponent_Template_div_click_7_listener() {
      return ctx.tab = "games";
    });
    \u0275\u0275text(8, " Giochi ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, LeaderboardsComponent_Conditional_9_Template, 1, 1, "single-leaderboard", 5)(10, LeaderboardsComponent_Conditional_10_Template, 0, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275classMap(\u0275\u0275pureFunction1(5, _c04, ctx.tab == "global"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pureFunction1(7, _c04, ctx.tab == "games"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, ctx.tab == "global" ? 9 : 10);
  }
}, dependencies: [SingleLeaderboardComponent], styles: ["\n\n/*# sourceMappingURL=leaderboards.component.css.map */"] });
var LeaderboardsComponent = _LeaderboardsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardsComponent, { className: "LeaderboardsComponent" });
})();

// src/app/features/website/website-routing.module.ts
var routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "games",
    component: GamesComponent
  },
  {
    path: "leaderboard",
    component: LeaderboardsComponent
  },
  {
    "path": "calendar",
    component: CalendarComponent
  }
];
var _WebsiteRoutingModule = class _WebsiteRoutingModule {
};
_WebsiteRoutingModule.\u0275fac = function WebsiteRoutingModule_Factory(t) {
  return new (t || _WebsiteRoutingModule)();
};
_WebsiteRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WebsiteRoutingModule });
_WebsiteRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var WebsiteRoutingModule = _WebsiteRoutingModule;
export {
  WebsiteRoutingModule,
  routes
};
//# sourceMappingURL=chunk-ZIBKWR7X.js.map
