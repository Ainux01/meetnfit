package com.meetnfit.login.AppUser;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.meetnfit.login.Registration.token.ConfirmationToken;
import com.meetnfit.login.Registration.token.ConfirmationTokenService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class AppUserService implements UserDetailsService {

	private final static String user_not_found="user with email %s not found";
	@Autowired
	private  UserRepository userRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private ConfirmationTokenService confirmationTokenService;
	
	
	@Override
	public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
		
		return userRepository.findByEmail(s)
				.orElseThrow(()-> new UsernameNotFoundException(String.format(user_not_found,s )));
	}
	
	public String signUpUser(AppUser appUser) {
		boolean userExists=userRepository.findByEmail(appUser.getEmail()).isPresent();
		if(userExists) {
			throw new IllegalStateException("email already taken");
		}
		String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());
		appUser.setPassword(encodedPassword);
		userRepository.save(appUser);
		String token=UUID.randomUUID().toString();
		ConfirmationToken confirmationtoken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				appUser);
		confirmationTokenService.saveConfirmationToken(confirmationtoken);
		return token;
	}
	public int enableAppUser(String email,String password) {
        return userRepository.enableAppUser(email,password);
    }

}
