import * as ajax from "./ajax"

// @ponicode
describe("send", () => {
    let inst: any

    beforeEach(() => {
        inst = new ajax.Ajax({ cache: "force-cache", credentials: "same-origin", destination: "object", headers: {}, integrity: "", isHistoryNavigation: true, isReloadNavigation: false, keepalive: false, method: "", mode: "navigate", redirect: "error", referrer: "", referrerPolicy: "origin-when-cross-origin", signal: { aborted: true, onabort: () => Infinity }, url: "", body: null, bodyUsed: false }, undefined)
    })

    test("0", async () => {
        await inst.send()
    })
})

// @ponicode
describe("abort", () => {
    let inst: any

    beforeEach(() => {
        inst = new ajax.Ajax({ cache: "no-cache", credentials: "include", destination: "audio", headers: {}, integrity: "", isHistoryNavigation: true, isReloadNavigation: false, keepalive: true, method: "", mode: "same-origin", redirect: "manual", referrer: "", referrerPolicy: "origin", signal: { aborted: true, onabort: () => false }, url: "", body: null, bodyUsed: false }, undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.abort()
        }
    
        expect(callFunction).not.toThrow()
    })
})
