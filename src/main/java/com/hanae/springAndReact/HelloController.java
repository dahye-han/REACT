package com.hanae.springAndReact;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hell, the time at the server is now " + new Date() + "\n";
    }
}