vector<int> anagramMappings(vector<int>& A, vector<int>& B) {
  map<int, int> hashB;
  vector<int> result;
  
  // map the elements of B to their index
  for (int i = 0; i < B.size(); i++)  hashB[B[i]] = i;
  
  // iterate through the elements of A and find the index within the B map
  for (auto element : A) result.push_back(hashB.find(element)->second);
        
  return result;
}
