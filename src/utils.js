const template = (strings, ...keys) => {
  return (function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}

const BOOKING_URL = `https://cdn-api.co-vin.in/api/v2/appointment/schedule`
const BENEFICIARIES_URL = `https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries`
const CALENDAR_URL_DISTRICT = template`https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=${0}&date=${1}`
const CALENDAR_URL_PINCODE = template`https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=${0}&date=${1}`
const CAPTCHA_URL = `https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha`
const OTP_PUBLIC_URL = `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`
const OTP_PRO_URL = `https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP`

const WARNING_BEEP_DURATION = [1000, 2000]

const viable_options = (resp, minimum_slots, min_age_booking, fee_type, dose) => {
    
}