## 📦 Резерв 1С — API Endpoints

### 👥 Staff

1. **`GET /staff_info/{guid}/{date}`**


2. **`GET /staff/{bin}/{date}`**


3. **`GET /staff_movements/{guid}`**


4. **`GET /staff-salary/`**

    * ✅ **Ожидаемый формат:**
      **`GET /staff-salary/{date_from}/{date_to}/{bin}`**


5. **`GET /salary_summary/{date_from}/{date_to}/{bin}`**


6. **`GET /employees_neport/{date_from}/{date_to}/{bin}`**

---

### 🏦 Финансы

7. **`GET /turnover_balance/{date_from}/{date_to}/{bin}`**


8. **`GET /assets/{date_from}/{date_to}/{bin}`**


9. **`GET /obligations-capital/{date_from}/{date_to}/{bin}`**

---

### 📦 Склад

10. **`GET /material_report/{date_from}/{date_to}/{bin}`**

---

### 📝 Примечания

* `guid` — уникальный идентификатор сотрудника.
* `bin` — БИН организации.
* `date`, `date_from`, `date_to` — даты в формате `YYYY-MM-DD`.

---
