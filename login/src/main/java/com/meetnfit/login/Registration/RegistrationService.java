package com.meetnfit.login.Registration;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.meetnfit.login.AppUser.AppUser;
import com.meetnfit.login.AppUser.AppUserRole;
import com.meetnfit.login.AppUser.AppUserService;
import com.meetnfit.login.Registration.token.ConfirmationToken;
import com.meetnfit.login.Registration.token.ConfirmationTokenService;


@Service
public class RegistrationService {
	
	@Autowired
	private AppUserService appUserService;
	@Autowired
	private EmailValidator emailValidator;
	@Autowired
	private ConfirmationTokenService confirmationTokenService;
	
	public String register(RegistrationRequest request) {
		boolean isValidEmail = emailValidator.test(request.getEmail());
		if(!isValidEmail) {
			throw new IllegalStateException("email not valid");
		}
		return appUserService.signUpUser(
				new AppUser(
						request.getName(),
						request.getUsername(),
						request.getEmail(),
						request.getPassword(),
						AppUserRole.USER
						)
		);	
	}
	public String confirmToken(String token) {
		ConfirmationToken confirmationToken = confirmationTokenService.getToken(token)
				.orElseThrow(()-> new IllegalStateException("token not found"));
	//System.out.println("coucou");
	appUserService.enableAppUser(
			confirmationToken.getAppUser().getEmail(),confirmationToken.getAppUser().getPassword());
	System.out.println(confirmationToken.getAppUser().getEmail()+confirmationToken.getAppUser().getPassword());
	return token;
	}
}



