describe('Protractor Demo App', function () {
    beforeEach(function () {
        browser.get('http://localhost:8888');
    });

    it('Check count of records in list', function () {
        element(By.css('.nav')).all(By.tagName('a')).get(1).click();
        browser.sleep(2000);
        var history = element.all(by.repeater('x in list'));
        expect(history.count()).toEqual(5);
    });

    it('Add record to list', function () {
        element(By.css('.nav')).all(By.tagName('a')).get(2).click();
        browser.sleep(2000);
        //var history = element.all(by.repeater('x in list'));
        element(by.model('title')).sendKeys('Test1');
        element(by.model('year')).sendKeys('2015');
        element(by.model('favorite')).click();
        browser.sleep(2000);
        element(by.css('.btn')).click();
        var history = element.all(by.repeater('x in list'));
        expect(history.count()).toEqual(6);
        expect(element.all(by.repeater('x in list')).get(5).element(by.id('title')).getText()).toEqual('Test1');
        expect(element.all(by.repeater('x in list')).get(5).element(by.id('year')).getText()).toEqual('2015');
        browser.sleep(2000);
    });

    it('Delete record from list', function () {
        browser.sleep(2000);
        browser.get('http://localhost:8888/#/GetBookList');
        browser.sleep(2000);
        var link = element.all(by.repeater('x in list')).get(5).element(by.id('delete'));
        link.click();
        browser.sleep(2000);
        //var history = element.all(by.repeater('x in list'));
        var history = element.all(by.repeater('x in list'));
        expect(history.count()).toEqual(5);

        var textRows = element.all(by.repeater('x in list')).each(function (row) {
            return row.getText();
            expect(textRows).toContain('Test1');
        });

        browser.sleep(2000);
    });

    it('Edit record from list', function () {
        browser.sleep(2000);
        browser.get('http://localhost:8888/#/GetBookList');
        browser.sleep(2000);
        var link = element.all(by.repeater('x in list')).get(3).element(by.id('edit'));
        link.click();
        browser.sleep(2000);
        //element(by.model('title')).sendKeys('Test1');
        element(by.model('year')).clear().sendKeys('2010');
        element(by.model('favorite')).click();
        browser.sleep(2000);
        element(by.css('.btn')).click();
        var history = element.all(by.repeater('x in list'));
        expect(history.count()).toEqual(5);
        expect(element.all(by.repeater('x in list')).get(3).element(by.id('year')).getText()).toEqual('2010');
        browser.sleep(2000);
    });




});