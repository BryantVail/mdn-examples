lesson = {
  name: "Using CSS Transitions",
  url:
    "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
  description:
    "Controls animation speed when changing CSS Properties; defines a transition sequence for css properties to change over time",
  notes: [
    "Explicitly listing the properties that will 'animate' is a feature",
    "Delay is an option; influence when the transition will start",
    "The 'auto' value is unpredictable; specification recommends not animating 'to' or 'to' \"Auto\"."
  ],
  aspects: [
    {
      name: "shorthand-syntax",
      desc: "transition: <property> <duration> <timing-function> <delay>;"
    },
    {
      name: "implicit transitions",
      desc:
        "the states between the 'start' and 'final' states- implicitly defined by the browser",
      notes: [""]
    },
    {
      name: "Timing Function",
      desc:
        "how the transition will run; linearly, or varied- quick at the start & slow at the end perhaps."
    },
    {
      name: "Delay",
      desc:
        "Determines when the transition will start; allows for manipulation based on when the transition otherwise would have executed."
    },
    {
      name: "animatable CSS properties",
      desc: "A finite selection of CSS Properties can be transitioned.",
      url:
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties"
    }
  ],
  sections: [
    {
      name: "Defining Transitions",
      desc:
        "shorthand 'transition' property; best- avoids 'out of sync parameters', which are a pain to debug. (../docs/web/css/css_transitions/using_css_transitions)",
      notes: [""],
      aspects: [
        {
          name: "Sub-Properties",
          desc: "Defining the aspects of a transition"
        },
        {
          name: "transition-property",
          desc:
            "names the CSS Properties to which transitions should be applied; only properties mentioned here will animate."
        },
        {
          name: "transition-duration",
          desc:
            "the time required for completion of the transition for the CSS Properties; global or specific durations of time can be used"
        },
        {
          name: "transition-timing-function",
          desc:
            "determines 'intermediate values' during the transition; linear & non-linear transition-timing-functions.",
          notes: ["easing functions cheat sheet: https://easings.net/en"],
          aspects: [
            {
              name: "ease",
              desc: "starts quick & slows to the end"
            },
            {
              name: "steps(count, 'end')",
              desc:
                "steps to immediate stops along the way to the final location of the transition; steps in movements that are not smooth compared to linear & 'ease' collection."
            }
          ]
        },
        {
          name: "transition-delay",
          desc:
            "timing difference between the call for the css-property to change, and when the transition begins.",
          notes: [""]
        }
      ]
    }
  ]
};
