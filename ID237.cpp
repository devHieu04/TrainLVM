#include<iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(NULL) {}
};

void deleteNode(ListNode* node) {
    // nếu nút đó hoặc nút kế tiếp không có giá trị
    if(node == NULL || node->next == NULL) {
        return;
    }
    // đổi giá trị của nút đó thành giá trị của nút kế tiếp
    node->val = node->next->val;
    // gán con trỏ của nút đó trỏ đến nút kế tiếp kế tiếp
    node->next = node->next->next;
}

void insertNode(ListNode* &head, int val) {
    ListNode* newNode = new ListNode(val);
    newNode->next = head;
    head = newNode;
}

void displayList(ListNode* head) {
    ListNode* curr = head;
    while(curr != NULL) {
        cout << curr->val << " ";
        curr = curr->next;
    }
    cout << endl;
}

int main() {
    ListNode* head = NULL;

    // chèn các nút vào đầu danh sách liên kết
    insertNode(head, 5);
    insertNode(head, 4);
    insertNode(head, 3);
    insertNode(head, 2);
    insertNode(head, 1);

    cout << "Danh sách liên kết trước khi xóa: ";
    displayList(head);

    // xóa nút thứ 3
    deleteNode(head->next->next);

    cout << "Danh sách liên kết sau khi xóa: ";
    displayList(head);

    return 0;
}

