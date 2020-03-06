describe("checkLeapYear is  a function", function() {
  mockDiv = {innerHTML: ''}
    // function checkLeapYear(year){
    
  it("checkLeapYear", function() {
    var result = checkLeapYear(2020, mockDiv);
    expect(result).toBe(true);
  });

  it("adds year to resultDiv if leap year", function() {
    var result = checkLeapYear(2020, mockDiv);
    expect(mockDiv.innerHTML).toBe('2020 is a leap year');
  });

  it("says nope if not leap year", function() {
    var result = checkLeapYear(2019, mockDiv);
    expect(mockDiv.innerHTML).toBe('nope');
  });
});