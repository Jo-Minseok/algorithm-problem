#include <iostream>
using namespace std;
int main(){
	int h, w;
	cin >> h >> w;
	for (int i = 0; i < h; i++) {
		for (int j = 0; j < w; j++) {
			cout << "*";
		}
		cout << "\n";
	}
}