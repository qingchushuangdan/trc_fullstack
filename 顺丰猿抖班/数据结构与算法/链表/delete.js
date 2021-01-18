// 链表的删除
// 给定一个排序的链表,删除所有重复的元素,使得每个元素只出现一次
// 1 > 1 > 2   // 1 > 2
// 1 > 1 > 2 > 2 > 3  // 1 > 2 > 3

function ListNode(val, next) {
  this.val = val
  this.next = next
}

const deleteDuplicates = function(head) {
  // 设定cur指针, 初始值为链表的第一个节点
  let cur = head
  // 遍历链表
  while (cur !== null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}