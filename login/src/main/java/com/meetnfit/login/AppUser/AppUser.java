package com.meetnfit.login.AppUser;

import java.util.Collection;
import java.util.Collections;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
public class AppUser implements UserDetails{

	@Id
	@SequenceGenerator(name="user_sequence",
						sequenceName="user_sequence",
						allocationSize=1)
	@GeneratedValue(
			strategy=GenerationType.SEQUENCE,
				generator="user_sequence")
	private Long id;
	private String username;
	private String name;
	private String email;
	private String password;
	private String adresse;
	private String age;
	private String phone;
	private String activity;
	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getActivity() {
		return activity;
	}

	public void setActivity(String activity) {
		this.activity = activity;
	}

	@Enumerated(EnumType.STRING)
	private AppUserRole appUserRole;
	private Boolean locked=false;
	private Boolean enabled=false;
	
	
	public AppUser() {
		super();
	}

	public AppUser(String username, String name, String email, String password, AppUserRole appUserRole) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.appUserRole = appUserRole;
	}

	public AppUser(String username, String name, String email, String password, AppUserRole appUserRole, Boolean locked,
			Boolean enabled) {
		super();
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.appUserRole = appUserRole;
		this.locked = locked;
		this.enabled = enabled;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority= new SimpleGrantedAuthority(appUserRole.name());
		return Collections.singletonList(authority);
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return !locked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return enabled;
	}

}
