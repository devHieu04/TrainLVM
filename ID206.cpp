#include <iostream>

using namespace std;

// Khai báo một nút của linked list
struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

// Hàm in linked list
void printList(Node* head) {
    while (head) {
        cout << head->val << " -> ";
        head = head->next;
    }
    cout << "null" << endl;
}

// Hàm đảo ngược linked list
Node* reverseList(Node* head) {
    // Khai báo 3 con trỏ
    Node* prev = nullptr;
    Node* curr = head;
    Node* next;

    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

int main() {
    // Tạo linked list: 1 -> 2 -> 3 -> 4 -> 5
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);

    // In linked list ban đầu
    cout << "Linked list ban đầu: ";
    printList(head);

    // Đảo ngược linked list
    head = reverseList(head);

    // In linked list sau khi đảo ngược
    cout << "Linked list sau khi dao nguoc: ";
    printList(head);

    return 0;
}
