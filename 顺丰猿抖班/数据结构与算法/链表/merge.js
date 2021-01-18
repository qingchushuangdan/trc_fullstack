// 链表的合并

// 将两个有序链表合并成一个新的有序链表并返回
// 新链表是通过拼接给定的两个链表的所有节点组成的

//  1 > 2 > 4   1 > 3 > 4 ===> 1 > 1 > 2 > 3 > 4

// 思路:处理链表的本质,就是处理链表节点之间的指针关系
function ListNode(val, next) {
  this.val = val
  this.next = next
}

const mergeTwoLists = function (l1, l2) {
  // 定义头节点,确保链表可以访问到
  // 指针
  let head = new ListNode()
  let cur = head
  // 开始穿针引线
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      // l1的指针向前移一步
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    // 每穿完一次,cur的指针也往后移一位
    cur = cur.next
  }

  // 链表长度不等
  cur.next = l1 !== null ? l1 : l2
  return head.next

}