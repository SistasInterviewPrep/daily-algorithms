#include <iostream>

using namespace std;

int romanToInt(string s) {
    int result = 0;
    
    unordered_map<char, int> hash {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}
    };
    
    for (auto i = 0; i < s.length(); i++) {
        if (s[i] == 'I' || s[i] == 'X' || s[i] == 'C') {
            if (s[i] == 'I') {
                if (s[i+1] == 'V' || s[i+1] == 'X') {
                    result -= hash.find(s[i])->second;
                } else {
                    result += hash.find(s[i])->second;
                }
            }
            
            if (s[i] == 'X') {
                if (s[i+1] == 'L' || s[i+1] == 'C') {
                    result -= hash.find(s[i])->second;
                } else {
                    result += hash.find(s[i])->second;
                }
            }
            
            if (s[i] == 'C') {
                if (s[i+1] == 'D' || s[i+1] == 'M') {
                    result -= hash.find(s[i])->second;
                } else {
                    result += hash.find(s[i])->second;
                }
            }
        } else {
            result += hash.find(s[i])->second;
        }
    }
    
    return result;
}
