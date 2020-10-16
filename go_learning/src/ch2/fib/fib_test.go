package fib

import (
	"testing"
)

func TestFibList(t *testing.T) {//测试之中的测试库
	// var a int = 1
	// var b int = 2
	// var (
	// 	a int = 1
	// 	b = 1
	// )
	a := 1
	b := 2
	t.log(a)
	for i := 0; i < 5; i++ {
		t.log(" ", b)
		tmp := a
		a = b
		b = tmp + a
		
	}
}
// 1, 1, 2, 3, 5, 8