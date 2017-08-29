describe('example test', function() {
  beforeEach(function () {
        browser.get('http://localhost:8888');
    });
  
    it('should be true', function() {
    expect().toBe('Home Page');
  });
});