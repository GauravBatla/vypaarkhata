import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

import { User } from '../models/user/user';
import { CommonService } from './common.service';
import { Error } from './error-handler/error.handler';
import { AlertTypeEnum } from './error-handler/alert-type.enum';
import { RequestManagerService } from './request-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private storage: Storage,
    private requestManager: RequestManagerService,
    private commonService: CommonService
  ) {

  }

  login = async (formData) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('loginmobile', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  signup = async (formData) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('JobProviderSignUp', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  contact = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('contact?app_type=job_provider').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  getUserStatus = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getUserStatus').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  updateUserStatus = async (data: any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('updateUserStatus', data).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  dealDone = async (data: any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('applyJob', data).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  getWallet = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getWallet').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  otpVerify = async (formData) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('otpVerify', formData).subscribe((data: any) => {
        // console.log(data);
        if (data.status == 200) {
          console.log('User Logged In!');
          var user = new User(data.user, data.token);
          this.storage.set('user', user);
          this.commonService.user.next(user);
        } else {
          setTimeout(() => {
            this.commonService.showAlert(AlertTypeEnum.Error, data.msg);
          }, 3000);
        }
        resolve(user);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  getJobCategory = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getCategory').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };
  AcceptServiceHistory = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getAcceptedJobRequest').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  filter = async (lat:any,lon:any,distance:any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.get(`jobSeekerJobSearch?lat=${lat}&lon=${lon}&distance=${distance}`).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };


  AppliedServiceHistory = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getApplyJobStatus').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  postJob = async (formData) => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.post('jobPost', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }
  addCategory = async (data: any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('categortyAdd', data).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  updateProfile = async (formData) => {
    return new Promise((resolve, reject) => {
      this, this.requestManager.post('updateProfile', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  getJobSeekerList = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getJobSeekerJobList').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  purchaseSubscription = async (id: any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('purchaseSubscription?plan_id=' + id).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }


  getJobSeekerDetail = async (id: any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('jobSeekerJobSeekerDetails?job_id=' + id).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  jobRequests = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getPendingJobRequest').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  getProfile = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getProfile').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  // get Subscription buy or not
  getPlan = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getPlan').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  getPlanList = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getAllPlan?user_type=user').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  serviceHistory = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getAcceptedJobRequest').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }


  updateJobRequest = async (data: any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('updateJob', data).subscribe((res: any) => {
        resolve(res)
      }), (err) => {
        reject(new Error(err.errors, err.status))
      }
    })
  }


  getAppURL = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('shareApp?user_type=agent').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  searching = async (formData) => {
    return new Promise((resolve, reject) => {
      this.requestManager.get(`jobSeekerJobSearch?name=${formData}`).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }




}
