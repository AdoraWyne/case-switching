# Next TODO:

- Write RTL for `src/App.tsx`?
  - Yes, for learning
- With my current approach:
  Something else to consider -- an over optimisation but a fun thought experiment -- is that as you've built it right now this will recalc the output on every keystroke and if you were to type in a long slug manually it would be doing the same work over and over again so have a think about how you might be able to reduce the number of computations you have to do over time.

# Case Switching

Turn string from one format to another format

## Kebab to Title

### Improvement - Future TODO

**Validation**

1. When user enters a non kebab sentence, prompt a warning message
2. When user enters more than 100 maxlength, prompt an error message.
