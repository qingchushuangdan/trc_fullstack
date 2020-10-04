//js 动态弱类型的语言
// twoSum undefined => function
// go 类型约束 现代的c语言node
func twoSum(nums []int, target int) []int{
	//o(n2) => o(n)
	// 2 7 9
	// for
	// 9-2 = 7
	// {7:0, }//hashTable
	// json 7
	h := make(map[int]int)//hashTable
	//js for python
	for i, value := range nums{
		if wanted, ok :=h[value]; ok{
		  return []int{wanted, i}
	  }else {
		  h[target-value] = i
	  }
	} //下标和值
	  return nil

}