/*
* Template Literal Types
* */

type World = 'world';

// Uppercase
type WorldUppercase = Uppercase<World>;

// Lowercase
type WorldLowercase = Lowercase<World>;

// Capitalize (첫 글자만 대문자)
type WorldCapitalize = Capitalize<World>;

// Uncapitalize (첫 글자만 소문자)
type WorldUncapitalize = Uncapitalize<World>;
