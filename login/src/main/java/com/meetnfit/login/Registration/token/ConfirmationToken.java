package com.meetnfit.login.Registration.token;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.meetnfit.login.AppUser.AppUser;

@Entity
public class ConfirmationToken {

	@Id
	@SequenceGenerator(name="confimation_token_sequence",
						sequenceName="confimation_token_sequence",
						allocationSize=1)
	@GeneratedValue(
			strategy=GenerationType.SEQUENCE,
				generator="confimation_token_sequence")
	private Long id;
	@Column(nullable=false)
	private String token;
	@Column(nullable=false)
	private LocalDateTime createdAt;
	@Column(nullable=false)
	private LocalDateTime expiredAt;
	
	private LocalDateTime confirmedAt;
	
	@ManyToOne
	@JoinColumn(nullable=false,name="app_user_id")
	private AppUser appUser;
	
	public ConfirmationToken(String token, LocalDateTime createdAt, LocalDateTime expiredAt,
			AppUser appUser) {
		super();
		this.token = token;
		this.createdAt = createdAt;
		this.expiredAt = expiredAt;
		
		this.appUser=appUser;
	}
	
	public AppUser getAppUser() {
		return appUser;
	}

	public void setAppUser(AppUser appUser) {
		this.appUser = appUser;
	}

	public ConfirmationToken() {
		super();
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDateTime getExpiredAt() {
		return expiredAt;
	}
	public void setExpiredAt(LocalDateTime expiredAt) {
		this.expiredAt = expiredAt;
	}
	public LocalDateTime getConfirmedAt() {
		return confirmedAt;
	}
	public void setConfirmedAt(LocalDateTime confirmedAt) {
		this.confirmedAt = confirmedAt;
	}
	
}
