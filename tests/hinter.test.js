describe("hinter", function () {

    var hinter;

    beforeEach(function () {
        hinter = $('body').hinter();
    });

    it("should configure the plugin options properly", function () {
        expect(hinter.message("test")).toEqual(hinter);
        expect(hinter.options().message).toBe("test");

        expect(hinter.error()).toEqual(hinter);
        expect(hinter.options().isSuccess).toBe(false);

        expect(hinter.success()).toEqual(hinter);
        expect(hinter.options().isSuccess).toBe(true);

        expect(hinter.slideUp(100)).toEqual(hinter);
        expect(hinter.options().slideUp).toBe(100);

        expect(hinter.delay(4)).toEqual(hinter);
        expect(hinter.options().delay).toBe(4);

        expect(hinter.id("hinter-id")).toEqual(hinter);
        expect(hinter.options().id).toBe("hinter-id");
    });

    it("should add one or more classes", function () {
        hinter.class("class1").class("class2 class3");
        expect(hinter.object()).toHaveClass("class1 class2 class3");
    });

    it("should be able to configure plugin options with an object", function () {
        var config = {
            message: "",
            isSuccess: true,
            slideUp: 250,
            delay: 5000,
            id: "hinter",
            class: "hinter"
        };
        expect(hinter.config(config).options()).toEqual(config);
    });

    it("should be able to configure plugin options and override default settings with an object", function () {
        var config = { message: "Hello world", isSuccess: false, id: "hinter-hello" };

        hinter.config(config);
        expect(hinter.options().message).toBe("Hello world");
        expect(hinter.options().isSuccess).toBe(false);
        expect(hinter.options().id).toBe("hinter-hello");
    });

    it("should configure and show the hint right away", function () {
        var config = { message: "Scary error message", isSuccess: false, id: "hinter-2-spooky" };

        $('body').hinter(config);
        expect($("#hinter-2-spooky")).toBeVisible();
    });

    it("should use alert-success class", function () {
        hinter.success().id("test-hint").show();
        expect($("#test-hint")).toHaveClass("alert-success");
    });

    it("should use alert-danger class", function () {
        hinter.success().id("test-hint").error().show();
        expect($("#test-hint")).toHaveClass("alert-danger");
    });

});