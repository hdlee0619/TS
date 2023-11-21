/*
* non-nullable type
* */

// null이 될 수 없는 값들만 추출
type NonNull = NonNullable<string | number | boolean | null | undefined | object>
