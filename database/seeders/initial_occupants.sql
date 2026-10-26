BEGIN;

-- ============================================================
-- COMMAND CENTER
-- ============================================================

INSERT INTO positions (name, is_active, created_at, updated_at)
SELECT v.name, true, now(), now()
FROM (VALUES
  ('Command Center Leader'),
  ('Helpdesk Officer - 1/7'),
  ('Helpdesk Officer - 2/7'),
  ('Helpdesk Officer - 3/7'),
  ('Helpdesk Officer - 4/7'),
  ('Helpdesk Officer - 5/7'),
  ('Helpdesk Officer - 6/7'),
  ('Helpdesk Officer - 7/7'),
  ('IT Support')
) AS v(name)
WHERE NOT EXISTS (
  SELECT 1 FROM positions p WHERE p.name = v.name
);

-- ============================================================
-- FACILITY OPERATION CENTER
-- ============================================================

INSERT INTO positions (name, is_active, created_at, updated_at)
SELECT v.name, true, now(), now()
FROM (VALUES
  ('FOC Leader'),
  ('Mechanical & Electrical Engineer'),
  ('Electrical & Electronic Technician - 1/3'),
  ('Electrical & Electronic Technician - 2/3'),
  ('Electrical & Electronic Technician - 3/3'),
  ('Mechanical Technician - 1/2'),
  ('Mechanical Technician - 2/2'),
  ('Building Supervisor'),
  ('Physical Security Officer - 1/24'),
  ('Physical Security Officer - 2/24'),
  ('Physical Security Officer - 3/24'),
  ('Physical Security Officer - 4/24'),
  ('Physical Security Officer - 5/24'),
  ('Physical Security Officer - 6/24'),
  ('Physical Security Officer - 7/24'),
  ('Physical Security Officer - 8/24'),
  ('Physical Security Officer - 9/24'),
  ('Physical Security Officer - 10/24'),
  ('Physical Security Officer - 11/24'),
  ('Physical Security Officer - 12/24'),
  ('Physical Security Officer - 13/24'),
  ('Physical Security Officer - 14/24'),
  ('Physical Security Officer - 15/24'),
  ('Physical Security Officer - 16/24'),
  ('Physical Security Officer - 17/24'),
  ('Physical Security Officer - 18/24'),
  ('Physical Security Officer - 19/24'),
  ('Physical Security Officer - 20/24'),
  ('Physical Security Officer - 21/24'),
  ('Physical Security Officer - 22/24'),
  ('Physical Security Officer - 23/24'),
  ('Physical Security Officer - 24/24'),
  ('Cleaning Service - 1/16'),
  ('Cleaning Service - 2/16'),
  ('Cleaning Service - 3/16'),
  ('Cleaning Service - 4/16'),
  ('Cleaning Service - 5/16'),
  ('Cleaning Service - 6/16'),
  ('Cleaning Service - 7/16'),
  ('Cleaning Service - 8/16'),
  ('Cleaning Service - 9/16'),
  ('Cleaning Service - 10/16'),
  ('Cleaning Service - 11/16'),
  ('Cleaning Service - 12/16'),
  ('Cleaning Service - 13/16'),
  ('Cleaning Service - 14/16'),
  ('Cleaning Service - 15/16'),
  ('Cleaning Service - 16/16')
) AS v(name)
WHERE NOT EXISTS (
  SELECT 1 FROM positions p WHERE p.name = v.name
);

-- ============================================================
-- CLOUD OPERATION CENTER
-- ============================================================

INSERT INTO positions (name, is_active, created_at, updated_at)
SELECT v.name, true, now(), now()
FROM (VALUES
  ('Cloud Operation Center Leader'),
  ('Server & Storage Engineer - 1/3'),
  ('Server & Storage Engineer - 2/3'),
  ('Server & Storage Engineer - 3/3'),
  ('Cloud Platform Engineer - 1/2'),
  ('Cloud Platform Engineer - 2/2')
) AS v(name)
WHERE NOT EXISTS (
  SELECT 1 FROM positions p WHERE p.name = v.name
);

-- ============================================================
-- DATA & APPLICATION OPERATION CENTER
-- ============================================================

INSERT INTO positions (name, is_active, created_at, updated_at)
SELECT v.name, true, now(), now()
FROM (VALUES
  ('Data & Application Operation Center Leader & Pjs. Leader COC'),
  ('Data & Application Operation Center Engineer - 1/3'),
  ('Data & Application Operation Center Engineer - 2/3'),
  ('Data & Application Operation Center Engineer - 3/3')
) AS v(name)
WHERE NOT EXISTS (
  SELECT 1 FROM positions p WHERE p.name = v.name
);

-- ============================================================
-- NETWORK OPERATION CENTER
-- ============================================================

INSERT INTO positions (name, is_active, created_at, updated_at)
SELECT v.name, true, now(), now()
FROM (VALUES
  ('Network Operation Center Leader'),
  ('Network Operation Engineer - 1/3'),
  ('Network Operation Engineer - 2/3'),
  ('Network Operation Engineer - 3/3'),
  ('Network Operation Technician - 1/4'),
  ('Network Operation Technician - 2/4'),
  ('Network Operation Technician - 3/4'),
  ('Network Operation Technician - 4/4')
) AS v(name)
WHERE NOT EXISTS (
  SELECT 1 FROM positions p WHERE p.name = v.name
);

-- ============================================================
-- SECURITY OPERATION CENTER
-- ============================================================

INSERT INTO positions (name, is_active, created_at, updated_at)
SELECT v.name, true, now(), now()
FROM (VALUES
  ('Security Operation Center Leader'),
  ('Cyber Security Engineer'),
  ('Cyber Security Technician')
) AS v(name)
WHERE NOT EXISTS (
  SELECT 1 FROM positions p WHERE p.name = v.name
);

-- ============================================================
-- OPERATION SUPPORT CENTER
-- ============================================================

INSERT INTO positions (name, is_active, created_at, updated_at)
SELECT v.name, true, now(), now()
FROM (VALUES
  ('Operation Support Center Leader'),
  ('General Admin'),
  ('HR Admin'),
  ('IT Governance Officer - 1/3'),
  ('IT Governance Officer - 2/3')
) AS v(name)
WHERE NOT EXISTS (
  SELECT 1 FROM positions p WHERE p.name = v.name
);

-- ============================================================
-- OCCUPANTS
-- ============================================================

WITH data(name, position_name) AS (
  VALUES
  ('Tutut Diwoto', 'Command Center Leader'),
  ('Muhammad Harris', 'Helpdesk Officer - 1/7'),
  ('Akhmad Khoirudin', 'Helpdesk Officer - 2/7'),
  ('Bayu Sidik Prasetyo', 'Helpdesk Officer - 3/7'),
  ('Muchrizal', 'Helpdesk Officer - 4/7'),
  ('Fahmi Argo', 'Helpdesk Officer - 5/7'),
  ('I Gede Darma Saputra', 'Helpdesk Officer - 6/7'),
  ('Ai Sri Rahayu', 'Helpdesk Officer - 7/7'),
  ('Fauzi Mazhar', 'IT Support'),

  ('Ivan Djamal', 'FOC Leader'),
  ('Sutikno', 'Mechanical & Electrical Engineer'),
  ('Wawan Hermawan', 'Electrical & Electronic Technician - 1/3'),
  ('Aditya Pratama', 'Electrical & Electronic Technician - 2/3'),
  ('M. Afifudin Akbar', 'Electrical & Electronic Technician - 3/3'),
  ('Tubagus Pirmannudin', 'Mechanical Technician - 1/2'),
  ('Yudhi Virgiawan', 'Mechanical Technician - 2/2'),
  ('Panji Danu Wijayanto', 'Building Supervisor'),

  ('Alif Fathur Rahman', 'Physical Security Officer - 1/24'),
  ('Rendi Maulana', 'Physical Security Officer - 2/24'),
  ('Yoyo Apriyanto', 'Physical Security Officer - 3/24'),
  ('Harun Ato', 'Physical Security Officer - 4/24'),
  ('Warsidi', 'Physical Security Officer - 5/24'),
  ('Karya Lesmana', 'Physical Security Officer - 6/24'),
  ('Joko Susanto', 'Physical Security Officer - 7/24'),
  ('Agung Umam Tri Susilo', 'Physical Security Officer - 8/24'),
  ('Santoso', 'Physical Security Officer - 9/24'),
  ('Zakaria', 'Physical Security Officer - 10/24'),
  ('Amin Budi Utomo', 'Physical Security Officer - 11/24'),
  ('Adi Ari Sandi', 'Physical Security Officer - 12/24'),
  ('Aniko Subakti', 'Physical Security Officer - 13/24'),
  ('Hendra Yadi Syam', 'Physical Security Officer - 14/24'),
  ('Indra Wahyudi', 'Physical Security Officer - 15/24'),
  ('Moh. Riki Mr', 'Physical Security Officer - 16/24'),
  ('Andika Triyadi', 'Physical Security Officer - 17/24'),
  ('Ridwan Fauzi', 'Physical Security Officer - 18/24'),
  ('Rion Novianda', 'Physical Security Officer - 19/24'),
  ('Evert E Patty', 'Physical Security Officer - 20/24'),
  ('Saipuddin', 'Physical Security Officer - 21/24'),
  ('Haris Akbar', 'Physical Security Officer - 22/24'),

  ('Agus Nasrulloh', 'Cleaning Service - 1/16'),
  ('Azdmi Zhofа Almugoby', 'Cleaning Service - 2/16'),
  ('Muhamad Fauzi Azhari', 'Cleaning Service - 3/16'),
  ('Seto Alawi', 'Cleaning Service - 4/16'),
  ('Suheri Junianto', 'Cleaning Service - 5/16'),
  ('Andre Hidayat', 'Cleaning Service - 6/16'),
  ('Abdul Qodir Jaelani', 'Cleaning Service - 7/16'),
  ('Nadiv Fattah Nubina', 'Cleaning Service - 8/16'),
  ('Rohman', 'Cleaning Service - 9/16'),
  ('Muhammad Akmal Abdillah', 'Cleaning Service - 10/16'),
  ('Iskandar', 'Cleaning Service - 11/16'),
  ('Fardilla Pamungkas', 'Cleaning Service - 12/16'),
  ('Muhammad Adi Syamsudin', 'Cleaning Service - 13/16'),
  ('Muhammad Bilal', 'Cleaning Service - 14/16'),
  ('Diki Wahyudi', 'Cleaning Service - 15/16'),
  ('Achmad Fauzan', 'Cleaning Service - 16/16'),

  ('Tengku Said Muhammad Ikram', 'Server & Storage Engineer - 1/3'),
  ('Doni', 'Server & Storage Engineer - 2/3'),
  ('Prio Arbi Wiharto', 'Server & Storage Engineer - 3/3'),
  ('Muhammad Syarief', 'Cloud Platform Engineer - 1/2'),
  ('Jhony Hidayat', 'Cloud Platform Engineer - 2/2'),

  ('Agus Setiawan', 'Data & Application Operation Center Leader & Pjs. Leader COC'),
  ('Novi Adrianto Wahjono', 'Data & Application Operation Center Engineer - 1/3'),
  ('Andika Putra', 'Data & Application Operation Center Engineer - 2/3'),
  ('Hendrik Sujudi', 'Data & Application Operation Center Engineer - 3/3'),

  ('Hendra Riyadi', 'Network Operation Center Leader'),
  ('Syarifah Syifa Hamidah', 'Network Operation Engineer - 1/3'),
  ('Germato Gemilang', 'Network Operation Engineer - 2/3'),
  ('Abby Ridhollah', 'Network Operation Engineer - 3/3'),
  ('Syahril Fahmi', 'Network Operation Technician - 1/4'),
  ('Said Muhammad Reza Fahmi', 'Network Operation Technician - 2/4'),
  ('Abdul Kadir Djaelani', 'Network Operation Technician - 3/4'),
  ('Ruslan Maulana', 'Network Operation Technician - 4/4'),

  ('Koko Handoko', 'Security Operation Center Leader'),
  ('Vinsensios Yoga Danar Wijaya', 'Cyber Security Engineer'),
  ('Riki Septiadi Maja', 'Cyber Security Technician'),

  ('Valensia Fanny', 'Operation Support Center Leader'),
  ('Julia Syahputra', 'General Admin'),
  ('Muhammad Wiwot Fahmi', 'HR Admin'),
  ('Andre Ludya Liap', 'IT Governance Officer - 1/3'),
  ('Priambodo Yoga Sudarsono', 'IT Governance Officer - 2/3')
)

INSERT INTO occupants (
  name,
  position_id,
  status,
  created_at,
  updated_at
)
SELECT
  d.name,
  p.id,
  'active',
  now(),
  now()
FROM data d
JOIN positions p ON p.name = d.position_name
WHERE NOT EXISTS (
  SELECT 1
  FROM occupants o
  WHERE lower(o.name) = lower(d.name)
);

COMMIT;
