package com.meetnfit.login.Registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path="api/v1/registration")
@AllArgsConstructor

@CrossOrigin
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping
	public String register (@RequestBody RegistrationRequest request) {
		return registrationService.register(request);
	}
	
	@GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }	

	 @PostMapping(path="/signin")
	    public ResponseEntity<String> authenticateUser(@RequestBody RegistrationRequest request){
	        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
	                request.getEmail(), request.getPassword()));

	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        return new ResponseEntity<>("User signed-in successfully!.", HttpStatus.OK);
	    }

}
